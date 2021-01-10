import React, {useEffect, useRef, useState} from 'react';
import {Breadcrumb, Layout, Menu, Avatar} from 'antd';


const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export interface IChatMessageType {
	message: string;
	photo: string;
	userId: number;
	userName: string;
}

const ChatPage: React.FC = () => {
	return <div>
		<Chat />
	</div>;
}

const Chat: React.FC = () => {


	return <div>
		<Messages />
		<AddMessageForm />
	</div>;
}

const Messages: React.FC = () => {

	const messagesWrap = useRef<HTMLDivElement>(null);
	const [messages, setMessages] = useState<IChatMessageType[]>([]);

	useEffect(() => {
		if (messagesWrap) {
			messagesWrap.current?.addEventListener('DOMNodeInserted', (event) => {
				const { currentTarget: target }  = event;
				(target  as HTMLElement)?.scroll({ top: (target  as HTMLElement)?.scrollHeight, behavior: 'smooth' });
			});
		}
	}, []);

	useEffect(() => {
		wsChannel.addEventListener('message', (e: MessageEvent) => {
			let newMessages = JSON.parse(e.data);
			setMessages((prevMessages) => {
				const allMessages = [ ...prevMessages, ...newMessages];
				return allMessages;
			});
		});


	}, []);

	return (
		<div style={{height: '400px', overflow: 'auto'}} ref={messagesWrap}>
			{messages.map((m, index) => <Message key={index} message={m} /> )}
		</div>
	);
}

const Message: React.FC<{message: IChatMessageType}> = ({ message }) => {

	return <div>
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start"

			}}>
			<Avatar src={message.photo} />
			<b>{message.userName}</b>
			<b>{message.message}</b>
		</div>
		<hr/>
	</div>;
}

const AddMessageForm: React.FC = () => {

	const [message, setMessage] = useState('');

	const sendMessage = () => {
		if (!message) return;

		wsChannel.send(message);
		setMessage('');
	}

	return <div>
		<div>
			<textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
		</div>
		<div>
			<button onClick={sendMessage}>Send</button>
		</div>
		Form
	</div>;
}

export default ChatPage;

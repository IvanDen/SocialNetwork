import React, {useEffect, useRef, useState} from 'react';
import {Breadcrumb, Layout, Menu, Avatar} from 'antd';
import {IChatMessage} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reduser";
import {AppStateType} from "../../redux/redux-store";

const ChatPage: React.FC = () => {

	return <div>
		<Chat />
	</div>;
}

const Chat: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startMessagesListening);
		return () => {
			dispatch(stopMessagesListening);
		}
	}, []);

	return <div>
		<Messages />
		<AddMessageForm />
	</div>;
}

const Messages: React.FC = () => {

	const messages = useSelector((state: AppStateType) => state.chat.messages);
	const messagesDivContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (messagesDivContainer) {
			messagesDivContainer.current?.addEventListener('DOMNodeInserted', (event) => {
				const { currentTarget: target }  = event;
				(target  as HTMLElement)?.scroll({ top: (target  as HTMLElement)?.scrollHeight, behavior: 'smooth' });
			});
		}
	}, [messages]);

	return (
		<div style={{height: '400px', overflow: 'auto'}} ref={messagesDivContainer}>
			{messages.map((m, index) => <Message key={index} message={m} /> )}
		</div>
	);
}

const Message: React.FC<{message: IChatMessage}> = ({ message}) => {

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

const AddMessageForm: React.FC<{}> = ({}) => {

	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	const sendMessageHandler = () => {
		if (!message) return;

		dispatch(sendMessage(message));
		setMessage('');
	}

	return <div>
		<div>
			<textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
		</div>
		<div>
			<button onClick={sendMessageHandler}>Send</button>
		</div>
		Form
	</div>;
}

export default ChatPage;

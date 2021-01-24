import React, {useEffect, useRef, useState} from 'react';
import {Breadcrumb, Layout, Menu, Avatar} from 'antd';

let wsChannel: WebSocket;
function createChannel () {
	wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
}


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
	const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

	useEffect(() => {
		let ws: WebSocket;

		const closeHandler = () => {
			console.log('CLOSE WS');
			setTimeout(closeHandler, 3000);
		}

		function createChannel () {

			ws?.removeEventListener('close', closeHandler);
			ws?.close();

			ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
			ws.addEventListener('close', closeHandler);
			setWsChannel(ws);
		}
		createChannel();

		return () => {
			ws.removeEventListener('close', closeHandler);
			ws.close();
		}

	}, []);

	return <div>
		<Messages wsChannel={wsChannel} />
		<AddMessageForm wsChannel={wsChannel}/>
	</div>;
}

const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {

	const messagesWrap = useRef<HTMLDivElement>(null);
	const [messages, setMessages] = useState<IChatMessageType[]>([]);

	useEffect(() => {
		if (messagesWrap) {
			messagesWrap.current?.addEventListener('DOMNodeInserted', (event) => {
				const { currentTarget: target }  = event;
				(target  as HTMLElement)?.scroll({ top: (target  as HTMLElement)?.scrollHeight, behavior: 'smooth' });
			});
		}
	}, [wsChannel]);

	useEffect(() => {
		const messageHandler = (e: MessageEvent) => {
			let newMessages = JSON.parse(e.data);
			setMessages((prevMessages) => {
				const allMessages = [ ...prevMessages, ...newMessages];
				return allMessages;
			});
		};
		wsChannel?.addEventListener('message', messageHandler);

		return () => {
			wsChannel?.removeEventListener('message', messageHandler);
		}
	}, [wsChannel]);

	return (
		<div style={{height: '400px', overflow: 'auto'}} ref={messagesWrap}>
			{messages.map((m, index) => <Message key={index} message={m} /> )}
		</div>
	);
}

const Message: React.FC<{message: IChatMessageType}> = ({ message}) => {

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

const AddMessageForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {

	const [message, setMessage] = useState('');
	const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

	useEffect(() => {
		const openHandler = () => {
			setReadyStatus('ready');
		}

		wsChannel?.addEventListener('open', openHandler);

		return () => {
			wsChannel?.removeEventListener('open', openHandler);
		}
	}, [wsChannel]);

	const sendMessage = () => {
		if (!message) return;

		wsChannel?.send(message);
		setMessage('');
	}

	return <div>
		<div>
			<textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
		</div>
		<div>
			<button disabled={wsChannel === null && readyStatus !=='ready'} onClick={sendMessage}>Send</button>
		</div>
		Form
	</div>;
}

export default ChatPage;

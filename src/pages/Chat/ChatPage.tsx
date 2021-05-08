import React, {useEffect, useRef, useState} from 'react';
import {Breadcrumb, Layout, Menu, Avatar} from 'antd';
import {IChatMessageAPIType} from "../../api/chat-api";
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
	const status = useSelector((state: AppStateType) => state.chat.status);

	useEffect(() => {
		dispatch(startMessagesListening());
		return () => {
			dispatch(stopMessagesListening());
		}
	}, []);

	return <div>
			{status === 'error' && <div> Error, refresh page!</div>}
			<>
				<Messages />
				<AddMessageForm />
			</>
	</div>;
}

const Messages: React.FC<{}> = ({}) => {

	const messages = useSelector((state: AppStateType) => state.chat.messages);
	const [isAutoScroll, setIsAutoScroll] = useState(true);
	const messageAnchorRef = useRef<HTMLDivElement>(null);

	const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		const element = e.currentTarget;
		if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
			!isAutoScroll && setIsAutoScroll(true);
		}
		else {
			!isAutoScroll && setIsAutoScroll(false);
		}
	};

	useEffect(() => {
		if (isAutoScroll) {
			messageAnchorRef.current?.scrollIntoView({behavior: 'smooth'});
		}
	}, [messages]);

	return (
		<div style={{height: '400px', overflow: 'auto'}} onScroll={scrollHandler}>
			{messages.map((m, index) => <Message key={m.id} message={m} /> )}
			<div ref={messageAnchorRef}></div>

		</div>
	);
}

const Message: React.FC<{message: IChatMessageAPIType}> = React.memo( ({ message}) => {
	console.log(">>>>>>>>>>>>>>>>>>messages");
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
});

const AddMessageForm: React.FC<{}> = ({}) => {

	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	const status = useSelector((state: AppStateType) => state.chat.status);

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
			<button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
		</div>
		Form
	</div>;
}

export default ChatPage;

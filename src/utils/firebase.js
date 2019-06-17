import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: ""
	authDomain: ""
	databaseURL: ""
	projectId: ""
	storageBucket: ""
	messagingSenderId: ""
	appId: ""
};

if (!app.apps.length) {
	app.initializeApp(firebaseConfig);
	app.auth();
	app.firestore();
	app.storage();
}

export default app;
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";


//function to read from database, currently reading all the documents
export default function ReadDataFromCloudFirestore(){
    const readData = async () => {
        try {
            const db = getFirestore()
            const querySnapshot = await getDocs(collection(db, "internship"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {
            console.log(error)
        }
    }
    readData();
}


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA13ED-Z8x5FLpeEzdSm-VrifHOypF6kgc",
    authDomain: "recipes-period.firebaseapp.com",
    projectId: "recipes-period",
    storageBucket: "recipes-period.appspot.com",
    messagingSenderId: "187803724429",
    appId: "1:187803724429:web:974d3f5795c77a3a9f90c4",
    measurementId: "G-69H3NH0GJV"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  /**
   * Getting data from firestore and packaging it into the JSON object I need.
   * @param {*} recipes handle for the recipe collection
   * @returns JSONy object representing my data
   */
  export const convertRecipesSnapshotToMap = (recipes) => {
      return recipes.docs.map(doc => {
          const { title, description, difficulty, ingredients, steps, time, image, id } = doc.data();

          return {
              title,
              description,
              difficulty,
              ingredients,
              steps,
              time,
              image,
              id
          };
      })
      .reduce((recipesObj, recipe) => ({...recipesObj, [recipe.id]: recipe}), {});
  }

  /**
   * Getting data from firestore and packaging it into the JSON object I need.
   * @param {*} recipes handle for the recipe collection
   * @returns JSONy object representing my data
   */
   export const convertRecipeSnapshotToObject = (recipeSnapshot) => {
        const { title, description, difficulty, ingredients, steps, time, image, id } = recipeSnapshot.data();

        return {
            title,
            description,
            difficulty,
            ingredients,
            steps,
            time,
            image,
            id
        };
    }

  /**
   * Get a url based on the name of the image in Firestore
   * Reference: https://medium.com/@sultanbutt820/react-native-image-upload-retrieve-delete-from-firebase-cloud-storage-ios-android-e05c7cdbf1d2
   */
export const getImageUrl = async (imageName) => {
    if (imageName) {
        const imageRef = firebase.storage().ref('/' + imageName);
        try {
            return await imageRef.getDownloadURL();
        } catch (e) {
            console.error('Error getting image url: ', e)
        }
    }

    return null;
}
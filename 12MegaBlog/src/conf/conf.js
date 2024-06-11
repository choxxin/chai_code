const conf = {
  appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketd: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
//console.log("APPWRITE_URL:", APPWRITE_URL);
// console.log("APPWRITE_PROJECT_ID:", import.meta.env.VITE_PROJECT_ID);
// console.log("APPWRITE_DATABASE_ID:", APPWRITE_DATABASE_ID);
// console.log("APPWRITE_COLLECTION_ID:", APPWRITE_COLLECTION_ID);
console.log("APPWRITE_BUCKET_ID:", import.meta.env.VITE_APPWRITE_BUCKET_ID);
export default conf;

**Get File Contents**
----
Get the contents of a file specified by 'id'. This endpoint is restricted to the owner or a set collaborator of the file.

* **URL**

  /file

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`

* **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "contents" : "ShowResult 'Hello ScPL'" }`

* **Error Response:**

     * **Code:** 401 UNAUTHORIZED <br />
       **Content:**<br/>
       `{ "status":"error", "message":"No authentication token was received." }`<br/>
       `{ "status":"error", "message":"Invalid authentication token." }`

     OR
     
     * **Code:** 404 NOT_FOUND <br />
       **Content:**<br/>
       `{ "status":"error", "message":"This user has added no files to their account." }`

     OR

     * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:**<br />
       `{ "status":"error", "message":"File file.scpl does not appear to exist." }`<br/>
       `{ "status":"error", "message":"Folder foldername does not appear to exist." }`<br/>
       `{ "status":"error", "message":"You do not appear to own this file|folder or it has not been shared with you." }`<br/>
       `{ "status":"error", "message":"Invalid file|folder ID." }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/file",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

* **Notes:**

     _No notes._

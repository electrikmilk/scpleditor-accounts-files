**Fork file shared with current user**
----
Fork a file shared with the current user, file is specified by 'id'. File is copied from file owner's user folder to the root of the current users folder. This endpoint is restricted to file collaborators, /copy is for file owners.

* **URL**

  /fork

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`

* **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "status" : "success", "message":"File file.scpl has been forked to your files." }`

* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

    * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:**<br/>
       `{ "status":"error", "message":"You are the owner of this file. No need to fork it." }`<br/>
       `{ "status":"error", "message":"Internal database error forking file.scpl." }`<br/>
       `{ "status":"error", "message":"Internal file system error forking file.scpl." }`<br/>
       `{ "status":"error", "message":"This file|folder has not been shared with you." }`<br/>
       `{ "status":"error", "message":"Invalid file|folder ID." }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/fork",
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

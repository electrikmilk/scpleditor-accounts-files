**Download ScPL File**
----
Download the specified ScPL file from the server.

* **URL**

  /download

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`

* **Success Response:**

     * **Code:** 200 OK<br />
       **Content:** `{ "url" : "https://account.scpl.dev/.../Example.scpl" }`

* **Error Response:**

     * **Code:** 401 UNAUTHORIZED <br />
       **Content:**<br/>
       `{ "status":"error", "message":"No authentication token was received." }`<br/>
       `{ "status":"error", "message":"Invalid authentication token." }`

     OR

     * **Code:** 503 SERVICE UNAVAILABLE <br />
       **Content:**<br />
       `{ "status":"error", "message":"File file.scpl does not appear to exist." }`<br/>
       `{ "status":"error", "message":"You do not appear to own this file or it has not been shared with you." }`<br/>
       `{ "status":"error", "message":"Invalid file ID." }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/download",
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

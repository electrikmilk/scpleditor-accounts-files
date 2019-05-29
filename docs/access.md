**Change File Access**
----
Add collaborators to a file. This will give the selected collaborators read/write access. However, collaborators may not delete, rename, copy, move or change access to any files shared with them. Currently only files may be shared until folder sharing is implemented. This endpoint is restricted to the owner of the file.

This overwrites the current list of collaborators, you'll need to get previous collaborators from the /files endpoint.

* **URL**

   /access

* **Method:**

   `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br />
   `id=[alphanumeric]`<br />
   `users=[comma-separated-list]`

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{ "status" : "success", "message":"Collaborators were set for file.scpl" }`

* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
    **Content:**<br/>
    `{ "status":"error", "message":"No authentication token was received." }`<br/>
    `{ "status":"error", "message":"Invalid authentication token." }`

  OR

  * **Code:** 503 SERVICE UNAVAILABLE <br />
    **Content:**<br/>
    `{ "status":"error", "message":"Internal database error setting collaborators." }`<br/>
    `{ "status":"error", "message":"Only the owner of this file is allowed to change who can access it." }`<br/>
    `{ "status":"error", "message":"You do not own this file." }`<br/>
    `{ "status":"error", "message":"Invalid file ID." }`

* **Sample Call:**

```javascript
    $.ajax({
      url: "https://account.scpl.dev/api/v1/access",
      dataType: "json",
      type: "POST",
      date: {
         token: "AUTH_TOKEN",
         id: "FILE_ID",
         users: "4356,3478"
      },
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Notes:**

  _No notes._

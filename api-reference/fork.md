**Fork file shared with current user**
----
Fork a file shared with the current user, file is specified by 'id'. File is copied from file owner's user folder to the root of the current users folder. This endpoint is restricted to file collaborators, /copy is for file owners.

* **URL**

/fork

* **Method:**

  <_The request type_>

  `POST`

*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._>

   **Required:**

   `id=[integer]`

   **Optional:**

   `photo_id=[alphanumeric]`

   * **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "status" : "success", "message":"Collaborators were set for file.scpl" }`

   * **Error Response:**

     * **Code:** 401 UNAUTHORIZED <br />
       **Content:** `{ "status":"error", "message":"No authentication token was received." | "Invalid authentication token." }`

     OR

     * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:** `{ "status":"error", "message":"Permission errors, invalid file ID" }`

   * **Sample Call:**

   ```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/access",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID"
            users: "4356,3478"
         },
         success : function(r) {
           console.log(r);
         }
       });
     ```

   * **Notes:**

     _No notes._

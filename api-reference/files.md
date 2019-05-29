**Get list of users files**
----
List of current users files (only owned by the user) in JSON format.

* **URL**

  /files

* **Method:**

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
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

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

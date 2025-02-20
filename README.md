# **🚀 Encrypted Passcode Login System [V1]**
A **minimal, professional, and secure login system** that authenticates users with a **single passcode** and **prevents unauthorized access** using local storage. Built with **HTML, CSS, and JavaScript**, this project is **server-less and database-free**, making it ideal for hosting on **Replit, Vercel, or GitHub Pages**.

![Login Page](loginpage.png)

---

## **📌 Features**
✅ **SHA-256 encrypted passcode authentication**  
✅ **Server-less & database-free** (Runs on any static host)  
✅ **Prevents direct URL access** (Unauthorized users get redirected back to Login page)  
✅ **Minimalistic and professional dark theme**  
✅ **Secure logout functionality**  
✅ **Warning notifications for wrong passcodes & URL jumping**  
✅ **Beautiful and responsive UI which can be further worked upon by people**  

> <b>Planned to release soon!</b>
```The second version of this project has a back-doored IP and Browser Info grabber which triggers upon a wrong login attempt and saves the User Data in a locally hosted file.```
---

## **📂 Project Structure**
```
/project-root
│── index.html        # Login page
│── styles.css        # Styles for the login page
│── script.js         # Handles authentication and notifications
│
│── /home
│   ├── index.html    # The secure dashboard (only accessible after login)
│   ├── styles.css    # Styles for the dashboard
```

---

## **🚀 Installation & Usage**
### **1️⃣ Clone the Repository**
```
git clone https://github.com/arpan-mandal/encrypted-login-page
cd encrypted-login-page
```

### **2️⃣ Open `index.html` in a Browser**
Since this is a **static project**, you can simply open `index.html` in your browser to test it. Or, use **Replit / Vercel** for online hosting.

---

## **🛠️ Setting Up a Custom Passcode**
This project uses **SHA-256 hashing** to store a **hashed passcode** instead of plaintext. You need to **generate a hash from your own passcode** and update `script.js`.

### **🔐 Generating a SHA-256 Hash**
Use **Python** to generate a **SHA-256 hash** for your custom passcode:

#### **📜 Python Code to Generate SHA-256 Hash**
```python
import hashlib

# Replace this with your desired passcode
passcode = "your_secret_passcode"

# Generate SHA-256 hash
hashed_passcode = hashlib.sha256(passcode.encode()).hexdigest()

print("Your hashed passcode:", hashed_passcode)
```

<i><b>It is recomended to include all types of characters in your passcode, it makes it much hard to crack through a decrypter!</b></i>

### **💾 Updating `script.js`**
1️⃣ Copy the generated **hashed passcode**  
2️⃣ Open `script.js` and replace the existing hash:
```js
const hashedPasscode = "your_new_hashed_passcode";
```

---

## **🔐 How Authentication Works**
1️⃣ **User enters a passcode** in `index.html`  
2️⃣ **JavaScript hashes** the input using **SHA-256**  
3️⃣ If it **matches the stored hash**, the user is **granted access**  
4️⃣ A **session token (`auth=true`) is saved** in `localStorage`  
5️⃣ `home/index.html` **checks authentication** before allowing access  
6️⃣ If unauthorized, the user is **redirected back to login**  

---

## **⚠️ Preventing Unauthorized Access**
The project uses a **client-side authentication system** to prevent **URL jumping**.

📌 If someone **tries to access `/home/index.html` without logging in**, they get **redirected back** to the login page with a warning notification.

**🔒 Authentication Check in `home/index.html`:**
```js
if (localStorage.getItem("auth") !== "true") {
    localStorage.setItem("warning", "true"); // Show warning notification
    window.location.href = "../index.html";  // Redirect to login
}
```

---

## **🔌 How to integrate the Encrypted Login Page into your own Website:**

### **🔑 Set Your Own Passcode**
1. Open **`script.js`**  
2. Replace the **hashed passcode** with your own SHA-256 hash (First line in script.js):
   ```js
   const hashedPasscode = "YOUR_HASHED_PASSCODE_HERE"; 
   ```

---

### **🔗 Hook It to Your Website**
- Set your **dashboard** or **protected page** inside `/home` (You can also edit the main code to set it to anywhere else you want)
- Ensure all **pages you wish to restrict access to** include this script at the top:
  ```html
  <script>
      if (localStorage.getItem("auth") !== "true") {
          localStorage.setItem("warning", "true");
          window.location.href = "../index.html";
      }
  </script>
  ```
  ✅ This **prevents direct URL access** to all the pages inside `/home` that make use of the script.

---



## **📜 License**
This project is **open-source** and available under the **GNU V3 License**.

---

## **💙 Credits**
- **Coded by [Arpan Mandal](https://arpanm.xyz)**
- **© 2025** All rights reserved

---

## **📞 Contact**
Got questions or suggestions? Feel free to reach out!  
📧 **Email:** rpnmndl0@gmail.com
🌐 **Website:** [arpanm.xyz](https://arpanm.xyz)  

---

> If you found this helpful, please ⭐ **star the repository** on GitHub to support the project! 🚀

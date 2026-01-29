🚀 WebToApk: Turn Your Website into an Android App
WebToApk is a GitHub Template that allows you to convert any static website (HTML/CSS/JS) into a native Android APK automatically using GitHub Actions.
No Android Studio or local environment required. Just upload your code, and GitHub builds the app for you.
⚡ Quick Start Guide
1. Fork this Repository
Click the Use this template (or Fork) button at the top right of this page to create your own copy of this repository.
2. Upload Your Website
Navigate to the 📂 www/ folder.
 * Delete the existing index.html.
 * Upload your website files here (HTML, CSS, JS, Images).
 * Important: You must have an index.html file in the root of the www folder.
3. Configure Your App
Open 📄 capacitor.config.json in the root directory and edit the following:
{
  "appId": "com.yourname.projectname",  <-- Unique ID (e.g., com.coolapp.game)
  "appName": "My Cool App",             <-- The name visible on the phone home screen
  "webDir": "www"
}

4. Change the App Icon
Navigate to the 📂 assets/ folder.
 * Replace icon.png with your own logo.
 * Requirement: The image must be PNG format and at least 1024x1024 pixels.
 * The build system will automatically generate all necessary Android icon sizes for you.
5. Download Your APK
Once you commit your changes (Step 2, 3, or 4), GitHub Actions will automatically start building your app.
 * Go to the Actions tab in your repository.
 * Click on the latest workflow run (e.g., "Build and Release APK").
 * Wait for the build to finish (usually 2-5 minutes).
 * Scroll down to the Artifacts section or check the Releases tab to download your webtoapk.apk.
📂 Project Structure
Here is where the important files live:
| Path | Description |
|---|---|
| www/ | PUT YOUR WEBSITE HERE. Contains your HTML, CSS, and JS files. |
| assets/icon.png | PUT YOUR LOGO HERE. The master icon used to generate app icons. |
| capacitor.config.json | EDIT THIS. Configuration for App Name and ID. |
| android/ | The native Android project files (managed by Capacitor). |
| .github/workflows/ | The automation script that builds the APK in the cloud. |
⚙️ Advanced Configuration
Changing Permissions (Camera, Location, etc.)
By default, this template only includes Internet permissions. If your website needs access to the Camera or Geolocation, you must edit the Android Manifest.
 * Open android/app/src/main/AndroidManifest.xml.
 * Add your permissions before the <application> tag.
Example:
<!-- Default -->
<uses-permission android:name="android.permission.INTERNET" />

<!-- Add these if needed -->
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

Custom Splash Screen
Currently, the template uses a generated splash screen. To customize it manually:
 * Replace the files in android/app/src/main/res/drawable/splash.png (and the various dpi folders inside res).
💻 Local Development (Optional)
If you prefer to build the app on your own computer, you need Node.js 22 and Android Studio.
 * Clone the repo:
   git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
cd your-repo

 * Install Dependencies:
   npm install

 * Sync Web Assets to Android:
   npx cap sync

 * Generate Icons:
   npm run resources

 * Open in Android Studio:
   npx cap open android

❓ FAQ
Q: The build failed! What do I do?
A: Check the "Actions" tab and click on the failed run to see the error log. Common issues include invalid JSON in capacitor.config.json or a missing index.html in the www folder.
Q: Is this APK signed for the Play Store?
A: The automated build produces a Debug APK. It is perfect for testing on your phone or sharing with friends. To publish to the Google Play Store, you will need to sign the APK using a Keystore (requires advanced Android setup).
Powered by CapacitorJS

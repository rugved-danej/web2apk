# Combined Project Documentation

*Generated on: 1/30/2026, 12:52:08 AM*
*Projects included: WebToApk*

## 📁 Combined Structure

Total files documented: 121

📦 Combined Project Structure
```

📂 WebToApk/
├── .github
│   └── workflows
│       └── android-build.yml
├── .gitignore
├── android
│   ├── .gitignore
│   ├── app
│   │   ├── .gitignore
│   │   ├── build.gradle
│   │   ├── capacitor.build.gradle
│   │   ├── proguard-rules.pro
│   │   └── src
│   │       ├── androidTest
│   │       │   └── java
│   │       │       └── com
│   │       │           └── getcapacitor
│   │       │               └── myapp
│   │       │                   └── ExampleInstrumentedTest.java
│   │       ├── main
│   │       │   ├── AndroidManifest.xml
│   │       │   ├── assets
│   │       │   │   ├── capacitor.config.json
│   │       │   │   ├── capacitor.plugins.json
│   │       │   │   └── public
│   │       │   │       ├── cordova.js
│   │       │   │       ├── cordova_plugins.js
│   │       │   │       └── index.html
│   │       │   ├── java
│   │       │   │   └── com
│   │       │   │       └── example
│   │       │   │           └── app
│   │       │   │               └── MainActivity.java
│   │       │   └── res
│   │       │       ├── drawable
│   │       │       │   ├── ic_launcher_background.xml
│   │       │       │   └── splash.png
│   │       │       ├── drawable-land-hdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-land-mdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-land-xhdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-land-xxhdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-land-xxxhdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-port-hdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-port-mdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-port-xhdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-port-xxhdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-port-xxxhdpi
│   │       │       │   └── splash.png
│   │       │       ├── drawable-v24
│   │       │       │   └── ic_launcher_foreground.xml
│   │       │       ├── layout
│   │       │       │   └── activity_main.xml
│   │       │       ├── mipmap-anydpi-v26
│   │       │       │   ├── ic_launcher.xml
│   │       │       │   └── ic_launcher_round.xml
│   │       │       ├── mipmap-hdpi
│   │       │       │   ├── ic_launcher.png
│   │       │       │   ├── ic_launcher_foreground.png
│   │       │       │   └── ic_launcher_round.png
│   │       │       ├── mipmap-mdpi
│   │       │       │   ├── ic_launcher.png
│   │       │       │   ├── ic_launcher_foreground.png
│   │       │       │   └── ic_launcher_round.png
│   │       │       ├── mipmap-xhdpi
│   │       │       │   ├── ic_launcher.png
│   │       │       │   ├── ic_launcher_foreground.png
│   │       │       │   └── ic_launcher_round.png
│   │       │       ├── mipmap-xxhdpi
│   │       │       │   ├── ic_launcher.png
│   │       │       │   ├── ic_launcher_foreground.png
│   │       │       │   └── ic_launcher_round.png
│   │       │       ├── mipmap-xxxhdpi
│   │       │       │   ├── ic_launcher.png
│   │       │       │   ├── ic_launcher_foreground.png
│   │       │       │   └── ic_launcher_round.png
│   │       │       ├── values
│   │       │       │   ├── ic_launcher_background.xml
│   │       │       │   ├── strings.xml
│   │       │       │   └── styles.xml
│   │       │       └── xml
│   │       │           ├── config.xml
│   │       │           └── file_paths.xml
│   │       └── test
│   │           └── java
│   │               └── com
│   │                   └── getcapacitor
│   │                       └── myapp
│   │                           └── ExampleUnitTest.java
│   ├── build.gradle
│   ├── capacitor-cordova-android-plugins
│   │   ├── build.gradle
│   │   ├── cordova.variables.gradle
│   │   └── src
│   │       └── main
│   │           ├── AndroidManifest.xml
│   │           ├── java
│   │           │   └── .gitkeep
│   │           └── res
│   │               └── .gitkeep
│   ├── capacitor.settings.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   └── variables.gradle
├── capacitor.config.json
├── package.json
└── www
    └── index.html
```

## 📄 File Contents

# 📦 Project: WebToApk

## 📁 .github (WebToApk)

**Path:** `WebToApk/.github`


### 📁 workflows (WebToApk)

**Path:** `WebToApk/.github/workflows`


#### ⚙️ android-build.yml

**Path:** `WebToApk/.github/workflows/android-build.yml`

```yml
   1: name: Build and Release APK
   2: 
   3: on:
   4:   push:
   5:     branches:
   6:       - main
   7:     paths:
   8:       - 'www/**'        # Trigger when website code changes
   9:       - 'android/**'    # Trigger when android config changes
  10:       - 'package.json'  # Trigger when dependencies change
  11:       - '.github/workflows/**'
  12: 
  13: jobs:
  14:   build:
  15:     runs-on: ubuntu-latest
  16:     permissions:
  17:       contents: write  # Required to create releases
  18: 
  19:     steps:
  20:       - name: Checkout Code
  21:         uses: actions/checkout@v4
  22: 
  23:       - name: Set up JDK 21
  24:         uses: actions/setup-java@v4
  25:         with:
  26:           java-version: '21'
  27:           distribution: 'temurin'
  28: 
  29:       - name: Setup Node.js
  30:         uses: actions/setup-node@v4
  31:         with:
  32:           node-version: '22'
  33: 
  34:       - name: Install Dependencies
  35:         run: npm install
  36: 
  37:       - name: Sync Web Assets to Android
  38:         # This copies your 'www' folder into the Android project
  39:         run: npx cap sync android
  40: 
  41:       - name: Build Android APK (Debug)
  42:         run: |
  43:           cd android
  44:           chmod +x gradlew
  45:           ./gradlew assembleDebug
  46: 
  47:       - name: Rename APK for Release
  48:         run: |
  49:           mv android/app/build/outputs/apk/debug/app-debug.apk android/app/build/outputs/apk/debug/webtoapk-v1.0.${{ github.run_number }}.apk
  50: 
  51:       - name: Create GitHub Release
  52:         uses: softprops/action-gh-release@v2
  53:         with:
  54:           tag_name: webtoapk
  55:           name: Pre-Release webtoapk
  56:           body: "Automated build from changes in `www` folder."
  57:           draft: false
  58:           prerelease: true
  59:           files: |
  60:             android/app/build/outputs/apk/debug/webtoapk-v1.0.${{ github.run_number }}.apk
  61: 
```

---

## 📄 .gitignore

**Path:** `WebToApk/.gitignore`

```text
   1: ��n o d e _ m o d u l e s /  
   2:  a n d r o i d / a p p / b u i l d /  
   3:  
```

---

## 📁 android (WebToApk)

**Path:** `WebToApk/android`


### 📄 .gitignore

**Path:** `WebToApk/android/.gitignore`

```text
   1: # Using Android gitignore template: https://github.com/github/gitignore/blob/HEAD/Android.gitignore
   2: 
   3: # Built application files
   4: *.apk
   5: *.aar
   6: *.ap_
   7: *.aab
   8: 
   9: # Files for the ART/Dalvik VM
  10: *.dex
  11: 
  12: # Java class files
  13: *.class
  14: 
  15: # Generated files
  16: bin/
  17: gen/
  18: out/
  19: #  Uncomment the following line in case you need and you don't have the release build type files in your app
  20: # release/
  21: 
  22: # Gradle files
  23: .gradle/
  24: build/
  25: 
  26: # Local configuration file (sdk path, etc)
  27: local.properties
  28: 
  29: # Proguard folder generated by Eclipse
  30: proguard/
  31: 
  32: # Log Files
  33: *.log
  34: 
  35: # Android Studio Navigation editor temp files
  36: .navigation/
  37: 
  38: # Android Studio captures folder
  39: captures/
  40: 
  41: # IntelliJ
  42: *.iml
  43: .idea/workspace.xml
  44: .idea/tasks.xml
  45: .idea/gradle.xml
  46: .idea/assetWizardSettings.xml
  47: .idea/dictionaries
  48: .idea/libraries
  49: # Android Studio 3 in .gitignore file.
  50: .idea/caches
  51: .idea/modules.xml
  52: # Comment next line if keeping position of elements in Navigation Editor is relevant for you
  53: .idea/navEditor.xml
  54: 
  55: # Keystore files
  56: # Uncomment the following lines if you do not want to check your keystore files in.
  57: #*.jks
  58: #*.keystore
  59: 
  60: # External native build folder generated in Android Studio 2.2 and later
  61: .externalNativeBuild
  62: .cxx/
  63: 
  64: # Google Services (e.g. APIs or Firebase)
  65: # google-services.json
  66: 
  67: # Freeline
  68: freeline.py
  69: freeline/
  70: freeline_project_description.json
  71: 
  72: # fastlane
  73: fastlane/report.xml
  74: fastlane/Preview.html
  75: fastlane/screenshots
  76: fastlane/test_output
  77: fastlane/readme.md
  78: 
  79: # Version control
  80: vcs.xml
  81: 
  82: # lint
  83: lint/intermediates/
  84: lint/generated/
  85: lint/outputs/
  86: lint/tmp/
  87: # lint/reports/
  88: 
  89: # Android Profiling
  90: *.hprof
  91: 
  92: # Cordova plugins for Capacitor
  93: capacitor-cordova-android-plugins
  94: 
  95: # Copied web assets
  96: app/src/main/assets/public
  97: 
  98: # Generated Config files
  99: app/src/main/assets/capacitor.config.json
 100: app/src/main/assets/capacitor.plugins.json
 101: app/src/main/res/xml/config.xml
 102: 
```

---

### 📁 app (WebToApk)

**Path:** `WebToApk/android/app`


#### 📄 .gitignore

**Path:** `WebToApk/android/app/.gitignore`

```text
   1: /build/*
   2: !/build/.npmkeep
   3: 
```

---

#### 📄 build.gradle

**Path:** `WebToApk/android/app/build.gradle`

```gradle
   1: apply plugin: 'com.android.application'
   2: 
   3: android {
   4:     namespace = "com.example.app"
   5:     compileSdk = rootProject.ext.compileSdkVersion
   6:     defaultConfig {
   7:         applicationId "com.example.app"
   8:         minSdkVersion rootProject.ext.minSdkVersion
   9:         targetSdkVersion rootProject.ext.targetSdkVersion
  10:         versionCode 1
  11:         versionName "1.0"
  12:         testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
  13:         aaptOptions {
  14:              // Files and dirs to omit from the packaged assets dir, modified to accommodate modern web apps.
  15:              // Default: https://android.googlesource.com/platform/frameworks/base/+/282e181b58cf72b6ca770dc7ca5f91f135444502/tools/aapt/AaptAssets.cpp#61
  16:             ignoreAssetsPattern = '!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~'
  17:         }
  18:     }
  19:     buildTypes {
  20:         release {
  21:             minifyEnabled false
  22:             proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
  23:         }
  24:     }
  25: }
  26: 
  27: repositories {
  28:     flatDir{
  29:         dirs '../capacitor-cordova-android-plugins/src/main/libs', 'libs'
  30:     }
  31: }
  32: 
  33: dependencies {
  34:     implementation fileTree(include: ['*.jar'], dir: 'libs')
  35:     implementation "androidx.appcompat:appcompat:$androidxAppCompatVersion"
  36:     implementation "androidx.coordinatorlayout:coordinatorlayout:$androidxCoordinatorLayoutVersion"
  37:     implementation "androidx.core:core-splashscreen:$coreSplashScreenVersion"
  38:     implementation project(':capacitor-android')
  39:     testImplementation "junit:junit:$junitVersion"
  40:     androidTestImplementation "androidx.test.ext:junit:$androidxJunitVersion"
  41:     androidTestImplementation "androidx.test.espresso:espresso-core:$androidxEspressoCoreVersion"
  42:     implementation project(':capacitor-cordova-android-plugins')
  43: }
  44: 
  45: apply from: 'capacitor.build.gradle'
  46: 
  47: try {
  48:     def servicesJSON = file('google-services.json')
  49:     if (servicesJSON.text) {
  50:         apply plugin: 'com.google.gms.google-services'
  51:     }
  52: } catch(Exception e) {
  53:     logger.info("google-services.json not found, google-services plugin not applied. Push Notifications won't work")
  54: }
  55: 
```

---

#### 📄 capacitor.build.gradle

**Path:** `WebToApk/android/app/capacitor.build.gradle`

```gradle
   1: // DO NOT EDIT THIS FILE! IT IS GENERATED EACH TIME "capacitor update" IS RUN
   2: 
   3: android {
   4:   compileOptions {
   5:       sourceCompatibility JavaVersion.VERSION_21
   6:       targetCompatibility JavaVersion.VERSION_21
   7:   }
   8: }
   9: 
  10: apply from: "../capacitor-cordova-android-plugins/cordova.variables.gradle"
  11: dependencies {
  12: 
  13: 
  14: }
  15: 
  16: 
  17: if (hasProperty('postBuildExtras')) {
  18:   postBuildExtras()
  19: }
  20: 
```

---

#### 📄 proguard-rules.pro

**Path:** `WebToApk/android/app/proguard-rules.pro`

```pro
   1: # Add project specific ProGuard rules here.
   2: # You can control the set of applied configuration files using the
   3: # proguardFiles setting in build.gradle.
   4: #
   5: # For more details, see
   6: #   http://developer.android.com/guide/developing/tools/proguard.html
   7: 
   8: # If your project uses WebView with JS, uncomment the following
   9: # and specify the fully qualified class name to the JavaScript interface
  10: # class:
  11: #-keepclassmembers class fqcn.of.javascript.interface.for.webview {
  12: #   public *;
  13: #}
  14: 
  15: # Uncomment this to preserve the line number information for
  16: # debugging stack traces.
  17: #-keepattributes SourceFile,LineNumberTable
  18: 
  19: # If you keep the line number information, uncomment this to
  20: # hide the original source file name.
  21: #-renamesourcefileattribute SourceFile
  22: 
```

---

#### 📁 src (WebToApk)

**Path:** `WebToApk/android/app/src`


##### 📁 androidTest (WebToApk)

**Path:** `WebToApk/android/app/src/androidTest`


###### 📁 java (WebToApk)

**Path:** `WebToApk/android/app/src/androidTest/java`


####### 📁 com (WebToApk)

**Path:** `WebToApk/android/app/src/androidTest/java/com`


######## 📁 getcapacitor (WebToApk)

**Path:** `WebToApk/android/app/src/androidTest/java/com/getcapacitor`


######### 📁 myapp (WebToApk)

**Path:** `WebToApk/android/app/src/androidTest/java/com/getcapacitor/myapp`


########## 📄 ExampleInstrumentedTest.java

**Path:** `WebToApk/android/app/src/androidTest/java/com/getcapacitor/myapp/ExampleInstrumentedTest.java`

```java
   1: package com.getcapacitor.myapp;
   2: 
   3: import static org.junit.Assert.*;
   4: 
   5: import android.content.Context;
   6: import androidx.test.ext.junit.runners.AndroidJUnit4;
   7: import androidx.test.platform.app.InstrumentationRegistry;
   8: import org.junit.Test;
   9: import org.junit.runner.RunWith;
  10: 
  11: /**
  12:  * Instrumented test, which will execute on an Android device.
  13:  *
  14:  * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
  15:  */
  16: @RunWith(AndroidJUnit4.class)
  17: public class ExampleInstrumentedTest {
  18: 
  19:     @Test
  20:     public void useAppContext() throws Exception {
  21:         // Context of the app under test.
  22:         Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
  23: 
  24:         assertEquals("com.getcapacitor.app", appContext.getPackageName());
  25:     }
  26: }
  27: 
```

---

##### 📁 main (WebToApk)

**Path:** `WebToApk/android/app/src/main`


###### 📄 AndroidManifest.xml

**Path:** `WebToApk/android/app/src/main/AndroidManifest.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <manifest xmlns:android="http://schemas.android.com/apk/res/android">
   3: 
   4:     <application
   5:         android:allowBackup="true"
   6:         android:icon="@mipmap/ic_launcher"
   7:         android:label="@string/app_name"
   8:         android:roundIcon="@mipmap/ic_launcher_round"
   9:         android:supportsRtl="true"
  10:         android:theme="@style/AppTheme">
  11: 
  12:         <activity
  13:             android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode|navigation|density"
  14:             android:name=".MainActivity"
  15:             android:label="@string/title_activity_main"
  16:             android:theme="@style/AppTheme.NoActionBarLaunch"
  17:             android:launchMode="singleTask"
  18:             android:exported="true">
  19: 
  20:             <intent-filter>
  21:                 <action android:name="android.intent.action.MAIN" />
  22:                 <category android:name="android.intent.category.LAUNCHER" />
  23:             </intent-filter>
  24: 
  25:         </activity>
  26: 
  27:         <provider
  28:             android:name="androidx.core.content.FileProvider"
  29:             android:authorities="${applicationId}.fileprovider"
  30:             android:exported="false"
  31:             android:grantUriPermissions="true">
  32:             <meta-data
  33:                 android:name="android.support.FILE_PROVIDER_PATHS"
  34:                 android:resource="@xml/file_paths"></meta-data>
  35:         </provider>
  36:     </application>
  37: 
  38:     <!-- Permissions -->
  39: 
  40:     <uses-permission android:name="android.permission.INTERNET" />
  41: </manifest>
  42: 
```

---

###### 📁 assets (WebToApk)

**Path:** `WebToApk/android/app/src/main/assets`


####### 📋 capacitor.config.json

**Path:** `WebToApk/android/app/src/main/assets/capacitor.config.json`

```json
   1: {
   2: 	"appId": "com.example.app",
   3: 	"appName": "MyApp",
   4: 	"webDir": "www"
   5: }
   6: 
```

---

####### 📋 capacitor.plugins.json

**Path:** `WebToApk/android/app/src/main/assets/capacitor.plugins.json`

```json
   1: []
   2: 
```

---

####### 📁 public (WebToApk)

**Path:** `WebToApk/android/app/src/main/assets/public`


######## 📄 cordova.js

**Path:** `WebToApk/android/app/src/main/assets/public/cordova.js`

```javascript
   1: 
```

---

######## 📄 cordova_plugins.js

**Path:** `WebToApk/android/app/src/main/assets/public/cordova_plugins.js`

```javascript
   1: 
```

---

######## 🌐 index.html

**Path:** `WebToApk/android/app/src/main/assets/public/index.html`

```html
   1: <html><body><h1>Hello World App!</h1></body></html>
   2: 
```

---

###### 📁 java (WebToApk)

**Path:** `WebToApk/android/app/src/main/java`


####### 📁 com (WebToApk)

**Path:** `WebToApk/android/app/src/main/java/com`


######## 📁 example (WebToApk)

**Path:** `WebToApk/android/app/src/main/java/com/example`


######### 📁 app (WebToApk)

**Path:** `WebToApk/android/app/src/main/java/com/example/app`


########## 📄 MainActivity.java

**Path:** `WebToApk/android/app/src/main/java/com/example/app/MainActivity.java`

```java
   1: package com.example.app;
   2: 
   3: import com.getcapacitor.BridgeActivity;
   4: 
   5: public class MainActivity extends BridgeActivity {}
   6: 
```

---

###### 📁 res (WebToApk)

**Path:** `WebToApk/android/app/src/main/res`


####### 📁 drawable (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable`


######## 📄 ic_launcher_background.xml

**Path:** `WebToApk/android/app/src/main/res/drawable/ic_launcher_background.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <vector xmlns:android="http://schemas.android.com/apk/res/android"
   3:     android:width="108dp"
   4:     android:height="108dp"
   5:     android:viewportHeight="108"
   6:     android:viewportWidth="108">
   7:     <path
   8:         android:fillColor="#26A69A"
   9:         android:pathData="M0,0h108v108h-108z" />
  10:     <path
  11:         android:fillColor="#00000000"
  12:         android:pathData="M9,0L9,108"
  13:         android:strokeColor="#33FFFFFF"
  14:         android:strokeWidth="0.8" />
  15:     <path
  16:         android:fillColor="#00000000"
  17:         android:pathData="M19,0L19,108"
  18:         android:strokeColor="#33FFFFFF"
  19:         android:strokeWidth="0.8" />
  20:     <path
  21:         android:fillColor="#00000000"
  22:         android:pathData="M29,0L29,108"
  23:         android:strokeColor="#33FFFFFF"
  24:         android:strokeWidth="0.8" />
  25:     <path
  26:         android:fillColor="#00000000"
  27:         android:pathData="M39,0L39,108"
  28:         android:strokeColor="#33FFFFFF"
  29:         android:strokeWidth="0.8" />
  30:     <path
  31:         android:fillColor="#00000000"
  32:         android:pathData="M49,0L49,108"
  33:         android:strokeColor="#33FFFFFF"
  34:         android:strokeWidth="0.8" />
  35:     <path
  36:         android:fillColor="#00000000"
  37:         android:pathData="M59,0L59,108"
  38:         android:strokeColor="#33FFFFFF"
  39:         android:strokeWidth="0.8" />
  40:     <path
  41:         android:fillColor="#00000000"
  42:         android:pathData="M69,0L69,108"
  43:         android:strokeColor="#33FFFFFF"
  44:         android:strokeWidth="0.8" />
  45:     <path
  46:         android:fillColor="#00000000"
  47:         android:pathData="M79,0L79,108"
  48:         android:strokeColor="#33FFFFFF"
  49:         android:strokeWidth="0.8" />
  50:     <path
  51:         android:fillColor="#00000000"
  52:         android:pathData="M89,0L89,108"
  53:         android:strokeColor="#33FFFFFF"
  54:         android:strokeWidth="0.8" />
  55:     <path
  56:         android:fillColor="#00000000"
  57:         android:pathData="M99,0L99,108"
  58:         android:strokeColor="#33FFFFFF"
  59:         android:strokeWidth="0.8" />
  60:     <path
  61:         android:fillColor="#00000000"
  62:         android:pathData="M0,9L108,9"
  63:         android:strokeColor="#33FFFFFF"
  64:         android:strokeWidth="0.8" />
  65:     <path
  66:         android:fillColor="#00000000"
  67:         android:pathData="M0,19L108,19"
  68:         android:strokeColor="#33FFFFFF"
  69:         android:strokeWidth="0.8" />
  70:     <path
  71:         android:fillColor="#00000000"
  72:         android:pathData="M0,29L108,29"
  73:         android:strokeColor="#33FFFFFF"
  74:         android:strokeWidth="0.8" />
  75:     <path
  76:         android:fillColor="#00000000"
  77:         android:pathData="M0,39L108,39"
  78:         android:strokeColor="#33FFFFFF"
  79:         android:strokeWidth="0.8" />
  80:     <path
  81:         android:fillColor="#00000000"
  82:         android:pathData="M0,49L108,49"
  83:         android:strokeColor="#33FFFFFF"
  84:         android:strokeWidth="0.8" />
  85:     <path
  86:         android:fillColor="#00000000"
  87:         android:pathData="M0,59L108,59"
  88:         android:strokeColor="#33FFFFFF"
  89:         android:strokeWidth="0.8" />
  90:     <path
  91:         android:fillColor="#00000000"
  92:         android:pathData="M0,69L108,69"
  93:         android:strokeColor="#33FFFFFF"
  94:         android:strokeWidth="0.8" />
  95:     <path
  96:         android:fillColor="#00000000"
  97:         android:pathData="M0,79L108,79"
  98:         android:strokeColor="#33FFFFFF"
  99:         android:strokeWidth="0.8" />
 100:     <path
 101:         android:fillColor="#00000000"
 102:         android:pathData="M0,89L108,89"
 103:         android:strokeColor="#33FFFFFF"
 104:         android:strokeWidth="0.8" />
 105:     <path
 106:         android:fillColor="#00000000"
 107:         android:pathData="M0,99L108,99"
 108:         android:strokeColor="#33FFFFFF"
 109:         android:strokeWidth="0.8" />
 110:     <path
 111:         android:fillColor="#00000000"
 112:         android:pathData="M19,29L89,29"
 113:         android:strokeColor="#33FFFFFF"
 114:         android:strokeWidth="0.8" />
 115:     <path
 116:         android:fillColor="#00000000"
 117:         android:pathData="M19,39L89,39"
 118:         android:strokeColor="#33FFFFFF"
 119:         android:strokeWidth="0.8" />
 120:     <path
 121:         android:fillColor="#00000000"
 122:         android:pathData="M19,49L89,49"
 123:         android:strokeColor="#33FFFFFF"
 124:         android:strokeWidth="0.8" />
 125:     <path
 126:         android:fillColor="#00000000"
 127:         android:pathData="M19,59L89,59"
 128:         android:strokeColor="#33FFFFFF"
 129:         android:strokeWidth="0.8" />
 130:     <path
 131:         android:fillColor="#00000000"
 132:         android:pathData="M19,69L89,69"
 133:         android:strokeColor="#33FFFFFF"
 134:         android:strokeWidth="0.8" />
 135:     <path
 136:         android:fillColor="#00000000"
 137:         android:pathData="M19,79L89,79"
 138:         android:strokeColor="#33FFFFFF"
 139:         android:strokeWidth="0.8" />
 140:     <path
 141:         android:fillColor="#00000000"
 142:         android:pathData="M29,19L29,89"
 143:         android:strokeColor="#33FFFFFF"
 144:         android:strokeWidth="0.8" />
 145:     <path
 146:         android:fillColor="#00000000"
 147:         android:pathData="M39,19L39,89"
 148:         android:strokeColor="#33FFFFFF"
 149:         android:strokeWidth="0.8" />
 150:     <path
 151:         android:fillColor="#00000000"
 152:         android:pathData="M49,19L49,89"
 153:         android:strokeColor="#33FFFFFF"
 154:         android:strokeWidth="0.8" />
 155:     <path
 156:         android:fillColor="#00000000"
 157:         android:pathData="M59,19L59,89"
 158:         android:strokeColor="#33FFFFFF"
 159:         android:strokeWidth="0.8" />
 160:     <path
 161:         android:fillColor="#00000000"
 162:         android:pathData="M69,19L69,89"
 163:         android:strokeColor="#33FFFFFF"
 164:         android:strokeWidth="0.8" />
 165:     <path
 166:         android:fillColor="#00000000"
 167:         android:pathData="M79,19L79,89"
 168:         android:strokeColor="#33FFFFFF"
 169:         android:strokeWidth="0.8" />
 170: </vector>
 171: 
```

---

######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-land-hdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-land-hdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-land-hdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-land-mdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-land-mdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-land-mdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-land-xhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-land-xhdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-land-xhdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-land-xxhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-land-xxhdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-land-xxhdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-land-xxxhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-land-xxxhdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-land-xxxhdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-port-hdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-port-hdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-port-hdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-port-mdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-port-mdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-port-mdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-port-xhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-port-xhdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-port-xhdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-port-xxhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-port-xxhdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-port-xxhdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-port-xxxhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-port-xxxhdpi`


######## 🖼️ splash.png

**Path:** `WebToApk/android/app/src/main/res/drawable-port-xxxhdpi/splash.png`

*Binary file (content not displayed)*

---

####### 📁 drawable-v24 (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/drawable-v24`


######## 📄 ic_launcher_foreground.xml

**Path:** `WebToApk/android/app/src/main/res/drawable-v24/ic_launcher_foreground.xml`

```xml
   1: <vector xmlns:android="http://schemas.android.com/apk/res/android"
   2:     xmlns:aapt="http://schemas.android.com/aapt"
   3:     android:width="108dp"
   4:     android:height="108dp"
   5:     android:viewportHeight="108"
   6:     android:viewportWidth="108">
   7:     <path
   8:         android:fillType="evenOdd"
   9:         android:pathData="M32,64C32,64 38.39,52.99 44.13,50.95C51.37,48.37 70.14,49.57 70.14,49.57L108.26,87.69L108,109.01L75.97,107.97L32,64Z"
  10:         android:strokeColor="#00000000"
  11:         android:strokeWidth="1">
  12:         <aapt:attr name="android:fillColor">
  13:             <gradient
  14:                 android:endX="78.5885"
  15:                 android:endY="90.9159"
  16:                 android:startX="48.7653"
  17:                 android:startY="61.0927"
  18:                 android:type="linear">
  19:                 <item
  20:                     android:color="#44000000"
  21:                     android:offset="0.0" />
  22:                 <item
  23:                     android:color="#00000000"
  24:                     android:offset="1.0" />
  25:             </gradient>
  26:         </aapt:attr>
  27:     </path>
  28:     <path
  29:         android:fillColor="#FFFFFF"
  30:         android:fillType="nonZero"
  31:         android:pathData="M66.94,46.02L66.94,46.02C72.44,50.07 76,56.61 76,64L32,64C32,56.61 35.56,50.11 40.98,46.06L36.18,41.19C35.45,40.45 35.45,39.3 36.18,38.56C36.91,37.81 38.05,37.81 38.78,38.56L44.25,44.05C47.18,42.57 50.48,41.71 54,41.71C57.48,41.71 60.78,42.57 63.68,44.05L69.11,38.56C69.84,37.81 70.98,37.81 71.71,38.56C72.44,39.3 72.44,40.45 71.71,41.19L66.94,46.02ZM62.94,56.92C64.08,56.92 65,56.01 65,54.88C65,53.76 64.08,52.85 62.94,52.85C61.8,52.85 60.88,53.76 60.88,54.88C60.88,56.01 61.8,56.92 62.94,56.92ZM45.06,56.92C46.2,56.92 47.13,56.01 47.13,54.88C47.13,53.76 46.2,52.85 45.06,52.85C43.92,52.85 43,53.76 43,54.88C43,56.01 43.92,56.92 45.06,56.92Z"
  32:         android:strokeColor="#00000000"
  33:         android:strokeWidth="1" />
  34: </vector>
  35: 
```

---

####### 📁 layout (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/layout`


######## 📄 activity_main.xml

**Path:** `WebToApk/android/app/src/main/res/layout/activity_main.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <androidx.coordinatorlayout.widget.CoordinatorLayout xmlns:android="http://schemas.android.com/apk/res/android"
   3:     xmlns:app="http://schemas.android.com/apk/res-auto"
   4:     xmlns:tools="http://schemas.android.com/tools"
   5:     android:layout_width="match_parent"
   6:     android:layout_height="match_parent"
   7:     tools:context=".MainActivity">
   8: 
   9:     <WebView
  10:         android:layout_width="match_parent"
  11:         android:layout_height="match_parent" />
  12: </androidx.coordinatorlayout.widget.CoordinatorLayout>
  13: 
```

---

####### 📁 mipmap-anydpi-v26 (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/mipmap-anydpi-v26`


######## 📄 ic_launcher.xml

**Path:** `WebToApk/android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
   3:     <background android:drawable="@color/ic_launcher_background"/>
   4:     <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
   5: </adaptive-icon>
```

---

######## 📄 ic_launcher_round.xml

**Path:** `WebToApk/android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
   3:     <background android:drawable="@color/ic_launcher_background"/>
   4:     <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
   5: </adaptive-icon>
```

---

####### 📁 mipmap-hdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/mipmap-hdpi`


######## 🖼️ ic_launcher.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-hdpi/ic_launcher.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_foreground.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_round.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png`

*Binary file (content not displayed)*

---

####### 📁 mipmap-mdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/mipmap-mdpi`


######## 🖼️ ic_launcher.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-mdpi/ic_launcher.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_foreground.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_round.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png`

*Binary file (content not displayed)*

---

####### 📁 mipmap-xhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/mipmap-xhdpi`


######## 🖼️ ic_launcher.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_foreground.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_round.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png`

*Binary file (content not displayed)*

---

####### 📁 mipmap-xxhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxhdpi`


######## 🖼️ ic_launcher.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_foreground.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_round.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png`

*Binary file (content not displayed)*

---

####### 📁 mipmap-xxxhdpi (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxxhdpi`


######## 🖼️ ic_launcher.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_foreground.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png`

*Binary file (content not displayed)*

---

######## 🖼️ ic_launcher_round.png

**Path:** `WebToApk/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png`

*Binary file (content not displayed)*

---

####### 📁 values (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/values`


######## 📄 ic_launcher_background.xml

**Path:** `WebToApk/android/app/src/main/res/values/ic_launcher_background.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <resources>
   3:     <color name="ic_launcher_background">#FFFFFF</color>
   4: </resources>
```

---

######## 📄 strings.xml

**Path:** `WebToApk/android/app/src/main/res/values/strings.xml`

```xml
   1: <?xml version='1.0' encoding='utf-8'?>
   2: <resources>
   3:     <string name="app_name">MyApp</string>
   4:     <string name="title_activity_main">MyApp</string>
   5:     <string name="package_name">com.example.app</string>
   6:     <string name="custom_url_scheme">com.example.app</string>
   7: </resources>
   8: 
```

---

######## 📄 styles.xml

**Path:** `WebToApk/android/app/src/main/res/values/styles.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <resources>
   3: 
   4:     <!-- Base application theme. -->
   5:     <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
   6:         <!-- Customize your theme here. -->
   7:         <item name="colorPrimary">@color/colorPrimary</item>
   8:         <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
   9:         <item name="colorAccent">@color/colorAccent</item>
  10:     </style>
  11: 
  12:     <style name="AppTheme.NoActionBar" parent="Theme.AppCompat.DayNight.NoActionBar">
  13:         <item name="windowActionBar">false</item>
  14:         <item name="windowNoTitle">true</item>
  15:         <item name="android:background">@null</item>
  16:     </style>
  17: 
  18: 
  19:     <style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
  20:         <item name="android:background">@drawable/splash</item>
  21:     </style>
  22: </resources>
```

---

####### 📁 xml (WebToApk)

**Path:** `WebToApk/android/app/src/main/res/xml`


######## 📄 config.xml

**Path:** `WebToApk/android/app/src/main/res/xml/config.xml`

```xml
   1: <?xml version='1.0' encoding='utf-8'?>
   2: <widget version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
   3:   <access origin="*" />
   4:   
   5:   
   6: </widget>
```

---

######## 📄 file_paths.xml

**Path:** `WebToApk/android/app/src/main/res/xml/file_paths.xml`

```xml
   1: <?xml version="1.0" encoding="utf-8"?>
   2: <paths xmlns:android="http://schemas.android.com/apk/res/android">
   3:     <external-path name="my_images" path="." />
   4:     <cache-path name="my_cache_images" path="." />
   5: </paths>
```

---

##### 📁 test (WebToApk)

**Path:** `WebToApk/android/app/src/test`


###### 📁 java (WebToApk)

**Path:** `WebToApk/android/app/src/test/java`


####### 📁 com (WebToApk)

**Path:** `WebToApk/android/app/src/test/java/com`


######## 📁 getcapacitor (WebToApk)

**Path:** `WebToApk/android/app/src/test/java/com/getcapacitor`


######### 📁 myapp (WebToApk)

**Path:** `WebToApk/android/app/src/test/java/com/getcapacitor/myapp`


########## 📄 ExampleUnitTest.java

**Path:** `WebToApk/android/app/src/test/java/com/getcapacitor/myapp/ExampleUnitTest.java`

```java
   1: package com.getcapacitor.myapp;
   2: 
   3: import static org.junit.Assert.*;
   4: 
   5: import org.junit.Test;
   6: 
   7: /**
   8:  * Example local unit test, which will execute on the development machine (host).
   9:  *
  10:  * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
  11:  */
  12: public class ExampleUnitTest {
  13: 
  14:     @Test
  15:     public void addition_isCorrect() throws Exception {
  16:         assertEquals(4, 2 + 2);
  17:     }
  18: }
  19: 
```

---

### 📄 build.gradle

**Path:** `WebToApk/android/build.gradle`

```gradle
   1: // Top-level build file where you can add configuration options common to all sub-projects/modules.
   2: 
   3: buildscript {
   4:     
   5:     repositories {
   6:         google()
   7:         mavenCentral()
   8:     }
   9:     dependencies {
  10:         classpath 'com.android.tools.build:gradle:8.13.0'
  11:         classpath 'com.google.gms:google-services:4.4.4'
  12: 
  13:         // NOTE: Do not place your application dependencies here; they belong
  14:         // in the individual module build.gradle files
  15:     }
  16: }
  17: 
  18: apply from: "variables.gradle"
  19: 
  20: allprojects {
  21:     repositories {
  22:         google()
  23:         mavenCentral()
  24:     }
  25: }
  26: 
  27: task clean(type: Delete) {
  28:     delete rootProject.buildDir
  29: }
  30: 
```

---

### 📁 capacitor-cordova-android-plugins (WebToApk)

**Path:** `WebToApk/android/capacitor-cordova-android-plugins`


#### 📄 build.gradle

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/build.gradle`

```gradle
   1: ext {
   2:     androidxAppCompatVersion = project.hasProperty('androidxAppCompatVersion') ? rootProject.ext.androidxAppCompatVersion : '1.7.1'
   3:     cordovaAndroidVersion = project.hasProperty('cordovaAndroidVersion') ? rootProject.ext.cordovaAndroidVersion : '14.0.1'
   4: }
   5: 
   6: buildscript {
   7:     repositories {
   8:         google()
   9:         mavenCentral()
  10:     }
  11:     dependencies {
  12:         classpath 'com.android.tools.build:gradle:8.13.0'
  13:     }
  14: }
  15: 
  16: apply plugin: 'com.android.library'
  17: 
  18: android {
  19:     namespace = "capacitor.cordova.android.plugins"
  20:     compileSdk = project.hasProperty('compileSdkVersion') ? rootProject.ext.compileSdkVersion : 36
  21:     defaultConfig {
  22:         minSdkVersion project.hasProperty('minSdkVersion') ? rootProject.ext.minSdkVersion : 24
  23:         targetSdkVersion project.hasProperty('targetSdkVersion') ? rootProject.ext.targetSdkVersion : 36
  24:         versionCode 1
  25:         versionName "1.0"
  26:     }
  27:     lintOptions {
  28:         abortOnError = false
  29:     }
  30:     compileOptions {
  31:         sourceCompatibility JavaVersion.VERSION_21
  32:         targetCompatibility JavaVersion.VERSION_21
  33:     }
  34: }
  35: 
  36: repositories {
  37:     google()
  38:     mavenCentral()
  39:     flatDir{
  40:         dirs 'src/main/libs', 'libs'
  41:     }
  42: }
  43: 
  44: dependencies {
  45:     implementation fileTree(dir: 'src/main/libs', include: ['*.jar'])
  46:     implementation "androidx.appcompat:appcompat:$androidxAppCompatVersion"
  47:     implementation "org.apache.cordova:framework:$cordovaAndroidVersion"
  48:     // SUB-PROJECT DEPENDENCIES START
  49: 
  50:     // SUB-PROJECT DEPENDENCIES END
  51: }
  52: 
  53: // PLUGIN GRADLE EXTENSIONS START
  54: apply from: "cordova.variables.gradle"
  55: // PLUGIN GRADLE EXTENSIONS END
  56: 
  57: for (def func : cdvPluginPostBuildExtras) {
  58:     func()
  59: }
```

---

#### 📄 cordova.variables.gradle

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/cordova.variables.gradle`

```gradle
   1: // DO NOT EDIT THIS FILE! IT IS GENERATED EACH TIME "capacitor update" IS RUN
   2: ext {
   3:   cdvMinSdkVersion = project.hasProperty('minSdkVersion') ? rootProject.ext.minSdkVersion : 24
   4:   // Plugin gradle extensions can append to this to have code run at the end.
   5:   cdvPluginPostBuildExtras = []
   6:   cordovaConfig = [:]
   7: }
```

---

#### 📁 src (WebToApk)

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src`


##### 📁 main (WebToApk)

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src/main`


###### 📄 AndroidManifest.xml

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml`

```xml
   1: <?xml version='1.0' encoding='utf-8'?>
   2: <manifest xmlns:android="http://schemas.android.com/apk/res/android"
   3: xmlns:amazon="http://schemas.amazon.com/apk/res/android">
   4: <application  >
   5: 
   6: </application>
   7: 
   8: </manifest>
```

---

###### 📁 java (WebToApk)

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src/main/java`


####### 📄 .gitkeep

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src/main/java/.gitkeep`

```text
   1: 
```

---

###### 📁 res (WebToApk)

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src/main/res`


####### 📄 .gitkeep

**Path:** `WebToApk/android/capacitor-cordova-android-plugins/src/main/res/.gitkeep`

```text
   1: 
   2: 
```

---

### 📄 capacitor.settings.gradle

**Path:** `WebToApk/android/capacitor.settings.gradle`

```gradle
   1: // DO NOT EDIT THIS FILE! IT IS GENERATED EACH TIME "capacitor update" IS RUN
   2: include ':capacitor-android'
   3: project(':capacitor-android').projectDir = new File('../node_modules/@capacitor/android/capacitor')
   4: 
```

---

### 📁 gradle (WebToApk)

**Path:** `WebToApk/android/gradle`


#### 📁 wrapper (WebToApk)

**Path:** `WebToApk/android/gradle/wrapper`


##### 📄 gradle-wrapper.jar

**Path:** `WebToApk/android/gradle/wrapper/gradle-wrapper.jar`

```jar
   1: PK    !              	 META-INF/LICENSEUT     �Z[s�6~ϯ�hfg�FI���}Rc�U7�3���>B$(aC,@Z���=�(�N�u=�֢���s��w�J|�g��r��]�ΩW/��/e�6��v����n��(�}���g퇡��͛��0�����ݛ��ro^�������X݈ww�����n�����as[��������;|\�[7���z��>!��ō�u�P��_ymf�D3���iD�d'8�l��*Q���U�6V�Nªޚj,�q�Eổv�����D�[�Jl�b�J�ȷf������A�{�[��z{�Xi��ջ� ̡SV�J�PG!�ao�����\Z1�� `ӝ�����K��j'qK�ϔ;< i��,IJ�� �z1^�
   2: j�xk0�`MSiU�А����]�JӶ����⠇=���⽱�G?��@�$�F�ͼ�ŉ+}�K�A��g�K�����BF����y)�'�����N��p_7�{�X!{E��Ӿ�d�9h�&�r�Ar���%պk�ʖ(��������������p�U.H�[ՁJ��H��L.�Ì3qk�7;�ν��&��Q�y|x�	���[�<�'��,�6�[	)�՞FZoU�����ך,��hM��h��*8Xwe3�) 	Eg��V���Gg����hCpJ��G��~��_��h����Fe�q��7�¹�;�3p��P~�ִ��r/;�:$DE��M��4�c-�`�bz@/�䘐6�Ƅ2��?�"� �'��N����P�n�*-�p��c2��(�!iL8���R@w�1�t�X�� H�n�	���R�h�XJJ2�B@70��-/k2��-d���qPO��agX�a���E�+��	��1��d�e�#X�Q	4���F �q���^� (����Q*V�F?DcnE��\8�u��� �5@�̴�Q�+1��4>O�>���<��0�r�A���%lfJ
   3: X�w��]�}~����I���|�z��w$�W�Z�c~�^Z���UV5Gȃ�3nтq��V]�k "[˒�D���h�3��:������}������)���.�Ҩ
   4: ���b��L$H2lZN�"K�Q���M�m7n;<x�A�E��z>h#��3Z�L���j�De��}���5��y��u�^��f^��˰H5��� 腭l(��uD>��[_`�FW�Ph���d!����R�+��%� u���� -+Y�
   5: ��T�r��;*,!%�H��+��ȵr��L� �6�8n9:��cKx�i�'B�T��S0���!�(���hF��J���&v(�rz��C(��Ȱ#�j�{K���|v��'�:;d�)On@���dS�e�
   6: �	(�"$��}R:����ඥ{s�F�ѷs��*��]<~`Vb3rq��z����,GeURd!�3�8�@���z5�eB��5�A#��L��<�����5�����e3_�V�'��є�g����a�`�X�q|�t	��qk���}#!��ЙK��'�X�}[N�#Y>��B9'la�5s�G�����+X��Z�!P$P�qCt-z>k�=�� l/����Ѧ���AP�/��؁q�e�
   7: 	f���죰����MӁ��ʈ]^������f�+��ܺ7;�^�Ք���	�ҡ��审6���Id���tA8w��ڂ�L���-�P��bY��c/� �0��S�c�N�	�|�~�
   8: V���8����(͈��?��h���z��6j�E ,�O��_8�	���v�S&�ñ�?Zb� ���4e
   9: ͨϔ�h��%/�*����+��V��|Ѻ �Ċ�໹X�|24��[yL�v�B��:p�	����%Ha�@����Ċ<m���?�dEj�� )�Z��˵i�'�����Pg��5�t�Hۡ����VGD�ʩo���젒��i'��Ѱ�6ۓ7�Jc��;u,����8���e�#�ŐF�غ����Lw.��� ����������p��q�fX�����a�Rț��LP�)���xqA�SHş��=�R�2Dh���1ќ�qvH��Or^��F�����}㇮�����ng�|O���;�'Ϯ.dʙe�_���zJ𡬨�LA�.�AI�7�A���BG(�Ʈ����hW
  10: 6��(鰝ʧ�~I�V F��AMtL�N�D�{Q��r0�Y�����u�,��T��[�[Y��M�|op�J�I�����m�y���p>3%�	��s��un���D���C>�!R�e���-B��d6ˆ�*��b��Gd&%��-�5�P��8"?�S8ި*�Uch�$b�p��y�id�0� 3\L&�VA��<����ǆy��⢉RWA����L N_�+P�?G�2��4��	˽���h����L}A�"�MM���V$���T"y�u6�K
  11: ��VM�pd�8K&*�q4��N��8�{jv�M �����x蠊:r�z��J��/I�.H�|�x�"�aV6�zvt��>�x:�a��ͧ��Kk�i���`�Z��G^�2.��7T_���2L��wXFH57B9p�R|�i���o���`�������?���L=�2�x�h�v���i����P�CX�xte9��ٍ�_�1}	��ŹYd48�R�g��#��c�_A4���T����=��'X�ɥP�M��ӨXxG	���MNj��!���|5�P�R����u�K�Z|�	v9�$��n���R�-V��"5/i
  12: V$���wI�+���-j�6�/'νƹ@�l���L���,7�������=܋O��z��_�n��:���{/�?�?���;�o��p:��I4�J��ISќT�:B�K���ȞC,�~y�� ��^/W����/��߮�����ݯ�������B����}`�e|\��ak��a��ns�Ֆo�Y �{�Tӭ��pW8�5��H���5D�B�7����9�Dx� ���;S��&3��{V������,��?��9�}�r��<_b�@���`�a'��v6j	7Y@C>2�Ԯ���Ju]���b2ʍ��/����7zK�����<"�[�-���������9)8�	.k4m�'�Z���t����Wҗ\��n=�}��b�W	H`x��r^h@h����8��|g�U<�j�5>mtɚcĘ����;3��|bp��x�
  13: ��؝1�A7���3e�����	FT���-W#��c�����[ ����r8�H�Oq^F���Q�%i���������s�0�kZ! /�H�:K�O{���t=�,|�-��roOAi�9�l��+�Z� ԑ��+��1�G�#ŝj;�jI��Y���0��O����A�A��W-p��_造������V2��	N�o�tMv9���!��@�`��%��nQ��IQ~&�=���1�9��6u�M�jhWx0����\ږ�(��hŔΣ���O���+�f������x{�d#�H6�d��EcF�.���������PK����  �'  PK    !              	 META-INF/MANIFEST.MFUT     -��
  14: �0E�������f���d�c=ֱ�4L����u{�9�S�/�o,5���ف:O%�ĹQ[F�Ė���3�����S�xHT�ճ�f�q�ٸ�������L����7�^[��x���
  15: �PK�i�{   �   PK    !             1 	 org/gradle/cli/CommandLineArgumentException.classUT     MO�J1����Z/��9��viŲT�詧���i�d�d�bķ�$x�|(q����g�>��? `^��Y��B�ѥ|�����l��(t�"��H�G�" �+"�B��|�&`��*�"�t5c1����>��_��V"D��C��)b7��">���(�ncОg��x�2�f^�ʋ�`,��'��¥S�t�Ui������&�?����p*�������+�tq���d�g��Y���h�^��fP��0�]�U0JR�v�%@����?���}PK��"  p  PK    !             & 	 org/gradle/cli/CommandLineOption.classUT     eR[OQ���+P�^q���e-V0�/$U�%�/���큽4�[�1�?���F$hb|�w�;�م�^Μ����͙�_�� 0�%��{{�+o�:7v�kj����5�s����ܒ㙂⾰=6xP2��	ZN�-nq;E�i��,Ɉ���P6f�	�W��[-ۦ@��2�µ�+�/]����H�╙��J����0�T�k��x(m�0���n�ܴ�n�R_���f��V�Q�
  16: ��|��6w-}��-�PA?��ň�a�Z����<h�DH�P�o��k��$��vX�mI�"0|�0�t!ja��$-�k57d�`�']�'�\�bU�R~��7�_W1�L
  17: 
  18: FH�TU
  19: �R�bD� �I��,�`Gtݓ��I����*�#��9\P��n}��b�(q���$����u[(�d䅞�0��w�r_Rq�Ӹ�m��
  20: r�]Z���U녊��ȣHŹqx���5b���n���Q7�7M�l�tn�r�Q�hM,���=�Έ˴�(S?Z�2Q_�Ƣ��V����md{(2�a:ɫ��dM6_`�;�����g\������C�d�N������~b��L���Ƈ��?�Tw�2dپ�>��,V�A�?PKld�Mn  �  PK    !             3 	 org/gradle/cli/CommandLineParser$AfterOptions.classUT     �S�NA=C���҂�-� �Z0�
  21: �ILH0��c���eaw��ݢ�ȃ���%���w��4�&sg�s�;w~����
  22: ���^V>5n�iK�U7J����H�lA�Jx�����<4�]a�M?4���E�h8���Ǩ-.�[��*��z��h#���<-�t\)�r�C�B����+s�*�-��C`�f�T�x�z���Sv�=Q�<���>�v�"��*jz�	�ш���J=)m��HhdHYg�z!@n���0�ĕn��a&���b�ϭ��Б֡a8�!$�@�a��5ArT�>�x���x���)oFq͖�;Á���ׅyQ�咴�+��qO�k�/�w�Y�8�覭g�zK=/�]�I�F���@���Y��_x��^�5�bȈ���+�i�BF!�_;u3r��R����rwp7�ۘb��`0$�m_h��ڞ�"j�4�1��>PC��+c��"֛~M�W��	�SSi��F��Y?�u�h��j	��M�'��a�+�o��+P�l�K|���p�㛥	�ٟ��.c���p��_Z9�4�M�������ɚ)l����1�挣�w��I�����PKk��[  �  PK    !             < 	 org/gradle/cli/CommandLineParser$BeforeFirstSubCommand.classUT     �UkO�`~^@
  23: �(�~l+�9�7�["�qJ2L4ﺗ����v�1�3L��?@#����e<]gA�׬�{����{���/ Fq�����w�O�"ח�]R'T}QM��cU���ck�S$w�)�'h��=M�}ɫY�:��MO��jY�xU3�LfD=KX7�[�f�$�*\���ˆ-�k�e�.�#_$��g��XV���1�y����a
  24: ����e��L��M#=�X�K3d�6w=��O�E�%����Z��/���\��j��
  25: w���}!���կ^�iu&�L�����/2\������K�p��ymho�.(
  26: d�!aC�cC�y3,�<��<mr����Ajs�%C���X��IۡV�EB7C|g|惘���A/C,ʍ�{��/o�Ih��'4\�3}�{�Y^�)8���8�#]��%ch.�a`=�[�GB�)M�D
  27: N &�8����A�Ib�M�Y�g/�Ί�=���fq����n��ЙC��?�-�ss7)H"�N�1��*i!��ַNXߴ���$��;�k�����u�H�(C��e�p�����X#z�$��+b�S^|��ʿ�2KǓF�ũ��[��Vh�L 'c�z��}Q�.�d���G�'^GϐGo���T�iS���2M��h ��YE���ES`��D����3zk�ݯ�� ���D!���*��E��B'�C�����k�)������GS�~Ca�;�u��Kt�!Q��p�ab#o�0Vh������Z��\�#.����5L�Q3Z*I��o��N�bJ"bل=į���Q$q�1J�dhw�0�ν	Ϳ PKH�.  ]  PK    !             = 	 org/gradle/cli/CommandLineParser$KnownOptionParserState.classUT     �V�we�=4e�tDZֲ�A�M�F���h[���%�}��L3OӁ�L���T�}���Wwѷ��q���z����9��'�>3IH��/����{����-����� 6��/=����Р�>�M-�J�"��������Z'���:��U'���CN>�ڇT��P.ͪ��.|n۶)��2ҵۊ�Cy� �3�F7�'73�ɹ����pۡ�H�ֺ��-��Б0�`���i~�np��-;�تf�X��c�V6��Z�<�Um�ۗ�1�Q�7'������\B�a����3Ȗ'N�+C,~�~|������ߘ�6�]��V0��Jɤ�`Zg�V�@6�y�0,�TG�X�ՍX�m�cq�q��v���Ǜ�������i�g4�n�р�AHX°�B\�1T5���A,�
  28: Q_�j��Q�Z��/Aԉ7E����[H�\,�.�ʴ�N;��r�e�j�4T3+P�<�t(�q&���Q-��7���ח\�m���!#��Z4#°`���5	�DR_j�N�
  29: �61,<��-�{�z����-�2lb+.�oUӨdJ#�<��nG�~W�]P��D�.j�Ҧ9�!���$��dh9�e1;�y��γ"�I�f��i*<�sǔ"�ʨ�(9��5�)C���/j�o�o\e�zgckv'��U)�WT��)ג��
  30: &w��a�j���D�[�σG�,�(��*�z�+�9!��ċNTm��v�#Iwv�ؽ|R���}"OI�m��%�;a󋐼���4�/x.�ݪ"Ɓ ��_���3�L��dH��aE�N��=i�'���Υ�+��%��MXAc�Đ��R�n�*�j��@��h[2D+��y.#��o��Ƶ�eqS�2�.t�-s�1�kf�P)�r�D:]cET�JVeg8�������T_v,a����ɰ��p(�8�� Fq�̆�8��ܡ��EN9�$Ώ�N�.*�Bx2��f��pь	�K�_�U�:�����a�e�V�,�8�:<��i�:�m\ƣb2.�c�8�Uő�Y���I�����4
  31: ���QF��/x�<M���V]�fXZ���9E�,�P��
  32: .?��"1A���L�q���^�8L�[��)z�	��j3���P��x���B�|;��EU���(Egy/n�8��x���y�!:��8> &}��[L�G~B?�`��גjWTGO>;��>u���D[C�?�ըۜ���.���ɽ'�q�I{��$ư�~?��K$6�STMa�i,O����V�L`Mdk�X���za!<m�Ƃ�Q��G���q�G�3l~[[&�v���89����I\u�4�R��fO�+\��W��״|�릐���Yo�3|F��qA7J����e/v�$H�蹾�R�X=��c�O�?�B�TX��v��B�%r��\���������:Fg���R�R�$UN;
  33: �R�Q�X�1��$��,5��u]���7HT��{U7'�|7��S�y�T{�w�k4VO"3В�DS+�8�,�N���d>+A�=-��G&q��8�J�����8����Àw�����=V�8�����N`�I����g�9���o��0j������-���˨���3���7�w�5��f3a\�!���}����Jg~�F���[���3?�O��)r�9_?�E+ˊC4G;Q��$���� ��Vj�<�ǽ� ��c� �R{�@i{������X�_��Q}��e���
  34: 4�մA{�����y��PK���  b  PK    !             < 	 org/gradle/cli/CommandLineParser$MissingOptionArgState.classUT     �SmO�P~.
  35: [��N�7��v/��Թ��(��d���ow�]���K�-1F~�����L���GOKg�,Ah�{�=}�眞s��_� ��`������NkqsOȶ�������۵ڞ4\�-��G�@��]�0���h����u-��]Î4Z�zլ�!���;=�!G�ˍ*��l)�oK��}�����r�h���~
  36: �!���|S<��P�|�b��툊�ؕu�u�l7I�9��/?���$7�Q�}k+�P0�P:�{`�$ä�0�n�=xHa���li����'�o3��O��*�P�P0�b
  37: �Ә�,C��o[��~���ӛox�W.��V�v-�à���Q.N�4���(���!�4P���4��Ì'���!?"�ɊU;>K�E�O�눐�����UqKi\��q!*�Ɛ��'���hTU�&N����
  38: ����(�jF����X�Rz��u�5��{�綄����*5_���0��&h�F��"����L�u�N�"��3G�|Z"HR��gX��h�$�bm*F^$�ٙ�d�Z,p�S�����K4�#Xq }ɣ�i'Rzu���ǐ�PKĀ�;M  �  PK    !             = 	 org/gradle/cli/CommandLineParser$OptionAwareParserState.classUT     �TkO�P~��q7Q��nle\�E�$hHp,@$���u�Rh;r�!���7�A�D�?��v喬MN{��y��r����� �a�����Z������p
  39: ꌪ�IU/���=��hv� ���d�宦�
  40: }�-ٮ:��-W$�C���f����Q}l��2}�S�,�]���V8��!M� �PH�b�Nkq�~�c�KR�MK0L��2$/X"�[fj�h��)��R�KWȁ�?��./�u�{BA�!Y���GC��� ��(��df�]���}'�Ϟ3ӛgx�N�>�.�0B�EC0����� A=B�������yA�J��0����?�)�;Fj���e6��A�-�qm8Q��w����(6�h��3��R�N��\���O�j��σ��W�~}M�ȓ<#��-ϥ�*�K�i�2R����f#P�4�~0��CP��!��[�Y��	ݣ�DC<����ٝJ$)�jncy5��ͼ]��e66�ֲ��ғ�GT��	�P��H��a�F�+(c�7��hq��l�ůeYI�&��$�V�ٙ�Z90WA�a��L�?q̄1:��"}�;)[��Bn�%��4u
  41: �pj��h��sJH ��i}I�^	!���V�́�&����E:/�OH���J������+�<�u���(�BΑ�O�:E�)�Hl���;F7�1���[Cd����J=�UK�!�m$�vJ����r�@���_PK�#�  J  PK    !             8 	 org/gradle/cli/CommandLineParser$OptionParserState.classUT     �P�N1��� ��N��!A,[REP!�R��8p�z'�׻��Q%T>��	��~ �� zC���yo�yf������0�s}��{�\\�N��@��@�Y!w2�a�'H�A��"�CnC1Dqi����,�Ef������6E�+��S��T�;��&��S���)�#4��"���e�&8
  42: ~� c���x(2��&�R���P2:ȳ��GN��X4�N
  43: ��c�w�a�/��G��4:�/P�:�ԾI-�.�J�}63�uh0�����0���\��q���화��V��b�5�C3�J��c���=w�w~;�vl�莸}v���Qe��Ѳ��x���b4?y������?5`~j�?P���N������<7�W	�&�,O<�MKn���MN����{��*tOA�PK"83|�  }  PK    !             3 	 org/gradle/cli/CommandLineParser$OptionString.classUT     uR]OA=Ck[�ji���+J[�4�H0>H�S^�tw�]����/F���_5��h��G�%~�f��;g�9s������� �a0|<;�o��[�<��o�f[������{��[�p%�ࡠ��#�Ӱ��f��PT��6\N���ب���(W5������n��(<��P�g�*��o�=]k����3`���L�ʑ���]�����ҩm���=k����
  44: �Z���X7�$��	���]�m�3J#Ő��f(���R�R�@����D/VJ�y�H��dK�C�q#�4nj�`z�0�!;�
  45: ��2�J�ILF��*����dHq�o���0?���,fqw��޿�:�*����:x���	<h.��I�c�H|K�#,��5�a>�V�UfHn�D0�����분z�[R�N�i.�����(�6@դѾJ�E$h�J�y������~zo���$E@�r�|��ǽX���f�P��~��>��Q�����	&.C��}�+1('�PK\�w  C  PK    !             2 	 org/gradle/cli/CommandLineParser$ParserState.classUT     �Q�N1'!K))z�+I�e(�D�J �8p�z'�׎��H��/8!����*�!P�"Œ�f���3��y��������u�G\\���m_t��/Lڗ���� 51RܢB�!�=����*�����*æ�O����4���u��I���r�;P�Y���N�F�R'�ͨ�[k?�ZA�C��,0��X�?�BMc�0�<V
  46: %���\�mR:�6C������A�A�y��N���E�A�AyWj��1(���0*�A�A���q^�g�R~!I����:�`��������w�F�˻��7�f{�w��|j����GF��ڟ�����%kF�I9�1u���`��i���G
  47: Kߨ9�U�:G�2y������w|���c�+aaLW�`e�A6�#,�h`��p>���^+TG>�:�E:P|PK���
  48: �  �  PK    !             ? 	 org/gradle/cli/CommandLineParser$UnknownOptionParserState.classUT     �S�NQ=���
  49: �oWԶt��+$10����ݽ,���ݢ�ȃ��Ф`���2�-E$i��3wfΙ3s�����'�y�2|>8xQ��W��'[_ԭm��[�_s=�a`��-(.�'x$(��#���^T�#}q�{�(�5��y�pGuaaΚ�K��|�߮{�n��Q�!���辐��x�t�T6l���cȬ�ui�Ǯ'��1�mO���+������s.#!�_{A�.X�)�Ǳ���"�$�|G��n�T�\�R�#At�!���0X�����x��뱚�R}�?,�~���c�������C����3����7�������AY��"�!.(oDCz�7����	���S�E�����À(e�*���j���y�	*�y"&1���W������s7���4t�F���u�0rܺ���,%�Pq�xI�4n��n1�Q�FN�#�M��ת���[
  50: �� �"]�
  51: �#�%b��W�|ɫ���"M�9����Ꞛ�n�l
  52: ��-�i��I�Å�7���9�p���!ƿM�%\nU��ed��_Z�+�h岭\�p�k_[�)\oKw�NO�E�#�
  53: =V��l`�Y�5p�����+ �ٔ��qhrbj�J PK_rJ%t  �  PK    !             & 	 org/gradle/cli/CommandLineParser.classUT     �U][G~�7ĴHTl,�6�!�h�X)� AmDK��!Y����J�^�����^��۶Z����uozџ��Q{f�W���^�Μy��9�9�����@j�=����ڼ���@\��w�5�R5L����غ �#L�]A�e����Zō�r���j)U�Ք!}���uk=�	���ퟭ�&�2Ou�TX%��1�Y���Yd�����O�b!�0�.�5GWS0��SJ���"��F:kW*��G��8w\�(2��<mr�����	�S���@~|r8���eƆ��3��C9�ب�y��vDI�O�s��5H;Np�|J�ˆ�gL�3�[Mvշ^Z,x2�n�s���1^��i���[�}����0�=gX�w�!�h�A������y��8��"x�ha�����62͚��C�.\�zf-��ǽ��w+����� �}��q����_߮>ȘV��pj}����l��ûФ�C��.T�Tbt#�:7���R�I|�	�EB���詓�p&1����{��0�O�-��;"m������$�i�i*���4N�4�ԁ��Ͻix�-��B"_���)�!2*ܣ��0�n�f��)��5aibJ�ꛈ�������*H���c�.ʂ^�'��MS���qJ���������Qp�a*�-��T��j�l���ۦrW�֚E�C�\TW�T�Y-s�
  54: ����Q:\�*�t'նT���n�
  55: �2�p�v(>��;�5�C5��"��O%�Ww!ݿ9��������Hb�r����2n
  56: x��x~�&�6�������Y�+�@���O~��kkM�W-�8|�.e����#'���o�0��:n�1��$"����܋aL��H�ׄe���tw	��6}�e_��TG��Բ-�͡�����08H�����R�[ȉ�^e��C	C�"��D���#��)qR�j�`�;�ӷ�ʺ+Uy��ґY�ݐ2ʪ�j��LJ�F7��B?� bRk��1)�di��J_�w�y�F���viv̟�dq�W8XYơ�O8���{�����cD�p,���h|�H��OЁ�U�_P}�;^�\8���Jv����Xp	?õX0ڳ��gH���4�[B�)�	��o�|�l1�+��H ,D��+^��o[�]����bq�c�/c�%�� F;~��SI҈��w��Q`��%87�����{�1��a��[?��e�PK�#���  c  PK    !             & 	 org/gradle/cli/ParsedCommandLine.classUT     �U�vU�v�v��Xh�P@$DJ���z �Z��H�����N:�d&�L�`�d� ��� ��Vm�,�+/\�������9@b��\����?���;����� �a2<y��n�pN�������Z>kv�d��g�V�h��7��r����qm�k{n������X�T��R�9rssS��,a�d3>_6Mr�;j|�^�U0,��*�w�;.�"rrf2��~�� ���ˎ�o&g�N!QpT��	�4wT����],����|��w�}5a�V!����'���]�+�2���p"U�=�L�Tݝ�ZZ`,9�喷Y�w�2�0��}���򇞣.;�r���1���8꣔�ȾE�2�k�ƻd���������dH2u�)ᤌa�ߏ^��@Q2	gd�(���n�EsuiOBH�E��m���qG�lGt<���A�(.�Jc���&$R�mQm��
  57: �� �8�ߪ�O6s�G�xG�:�o��N�����%�&vVƜ�\��_s=�6`�I\�q�m��H�"�T*����	:=]Ǽ�����/˶Ǘ-��mXӭ"Yι�1�[�M���l��Hb���[)�Ή��e�����5�r&��pSp�p����Jt)0��;�tn�iRH�:l,�;�!�n��v���EF�|�`�2)���L��·F�X��|�}�P�����NQ%F�vi���S��x c	۔���b�}��#Z|$5Rh�t��P�&r�����j6�a����&�F�Bc��XȲ����Ԁ>@^��K���fG�AGq��jL��K���ǐ�^�HmU+]5ݫ8N�=z���zi�&�f�+8Q�p6U����⬰ϑ}�žP�Ea�ɾt��T�&���/q���l��w�@��xp�G$�@,��0r�;���ӣ?����!5:�R�>Zӑ*ֲ���/��-�t�Qn�\��-�r$�~��-�#��0��Q7}�O�~���g�2CB��24������sl��-�\�%������/��G3��L0�O��>��D����։F����뿢7�
  58: ���4�h&X�P|���R�ڐ=��PKl�A�<  �  PK    !             , 	 org/gradle/cli/ParsedCommandLineOption.classUT     mP�J�@�֪������C�bU�RE������q���k7I�M
  59: "�A|"(� >�8-x�2��������������7�'�+Հ��o�����*K���\gi�d1oɐt�b_�@�I\�8�Փ�ў?��D=��7��{m��}�0�	חA�!��N��NcfGd�b����"��e��mVXE�ڐ�Vf�0�22*��kiEY��4js^g8Y�ì�����4;�R��y���49���T/rm�sk�c[����:���@i{箊
  60: +�PX���a��T�(cas�	�^�h0���jmډI�5F�(q�w�߱���w��
  61: L�%�3(�PKSh�RS  �  PK    !             3 	 org/gradle/internal/file/PathTraversalChecker.classUT     uS[s�F�66�b̥��n�ZH"b�IJ0I���B=0Ё�ײ@ww��a���@����00m�����0�jF��w���w������ ,��0�ںU�y�H�g�	�ΜdI?������dA���J���U-���$�Y��X�9��ޯE9G{ii>X8E���.�;�cT���i+�0J��Q�.��\�׽E�^�u�	�Pie�+Q,j��P�N,�(�B�<��d�opݻ-y���F.NHe���:�c�����"����wEs�'�{b����ҹ���O���b*F�֒��d(��ޯ��=��^��OE(ͥV�D��pp�de�@�9E=01�0�y&�d0�,�<Já�c=.[ⷁHQ0|�C9�a�� �=J���"o�[�)�ze��~�v�@H�4�^61Ke�K�hL����M�Eb�ư;����B��*|LT��w��~3x,,P-wZV�c�J����D�:kfB6h̶{��=���3y]ˤz#J;ن2���l�^�c����H���@���6p���>���H�i�mn�as��ua��ܴ3i�iT��@�.0�w3�p�pf�^���x�v�}	�\�e�[��H���Ѹ[��P�y��Pn�mb�פ�s}�����۱(Oa��Lz������厰o���>���]�bqӵ����bڵ�����Z��k�(׵f
  62: dʵ����^`�N��b�-l�ܿ^�����0�5Kn˺x�֞�꿅���;Izh�hT�H_	�PFX`%����PK�50�  �  PK    !             A 	 org/gradle/internal/file/locking/ExclusiveFileAccessManager.classUT     eP�N�@}[LBRH�|�{�c��(��P{*��J���L�%�u�kG T>�?�3'����c���0�y�͛�y�s� `������D�)�Q��q��<�i#��(�Gĸ#C���#5!5�e����4���Yer��#�����u�����DF.ɦ�9mSF��<�b|��~g�h�\�h�K��6$p��4N���-�Yi�1S��Ք��ʔ^��c���SieJ.@C`�\�el$+�$礊 ������H`as묃%����e�2��{�Zj*̥�����D�qM������_�^4UUv���2V�X���K����'|*����{Q-��-W=΂s���Z�B�g��3��D��7���q�`�E]�3�_�}�PK����    PK    !             > 	 org/gradle/util/internal/WrapperDistributionUrlConverter.classUT     �Q]OA=#�Ų*��֗�ݮ`$5�`LL04}�No�����پ�!�
  63: �J"��&�(�,5h�$��=s�=��|���+��0|><�m}z\��[��@�I&�2�a���������8ȋ$�\���8LxʲGoss]l<s\�:�
  64: ��y��Jұ�DF�ء#2��rx����
  65: �4
  66: >͂1T;ia���Z����𾢨�RER[2����YF�̭���|Ϩ�T�Ύ��0��G<R\����>	�a�aYLH�O�;��F�{{緼c˹۫H���v_��?kU���RK���V����W���U��1َ{��]���M�1���|���l4K�������)�qc},O47�?��@����6ôM]�n�A}�Ž�t��������ix(�ˁY����
  67: ���`��}����X���Ժk�1n���Gg�}	S?PK�UQ��  �  PK    !             / 	 org/gradle/wrapper/BootstrapMainStarter$1.classUT     mQ�nA�!�5ƐI�p�#�W"��$NAHX‸����8�����9 �!|. q��(D��iuuUu���_�8�]���/���v��4Փ��ꪬ��h*��՘�l��pJ!�S�a^��tB6p7����:3K���I_?���O��
  68: ����eW��+]��K�A�Ao��y��o@)4���k~f,+t*_䅧������f�?���4�ɸa$���'XW؞тrK��_�f�c�M��j�|��\z�&ACa�q&>VXkw^��č&�d@Zs���֟���1��ۜu^+^��,͝<��zGoz3�l��J�`W!))
  69: 5(��g��m�7�������cC�)\���&U��yG��J�������[��5���Ԥ����W��d�PK��>�    PK    !             A 	 org/gradle/wrapper/Download$DefaultDownloadProgressListener.classUT     �SQo�V���ԭqKJ(T�գ,	MC���V��֩AE�&���q����N����Þxa�㞑�Rm�����4�\�� ͖|�=���;�|���� ��9�w�W�mnm	�6�M�cΛV�����/�[P\
  70: O�P�f��%�+��0��r�{��7�N���%W�hW*���y�������(vyi���w\_��EB��E���مj�����bi�k�'j�tʎ�'�ے��B��۾p��U���^%G�0l�a$|!51d6���=�;����"��^�8B2�4�B�H6k#6���r�m��[	�:җb�q�FP�~���T�E�w�ON��SPa�!�/lGF��	#E�tP^ր�1�a�گؚ��p�Ks6C:��Z���B�0���u5'�����z�n �u��������^�O�k��Hɫ��6�^,�:TD�^h�S3�GA��(2}g��i:*�S�g���P3�)��·Dm?���۞ ��u�p�H�+�A-)�Y�co��=��]K�ս�p�az	7�2�NR�傎
  71: �$����1�t��0��q�r}m_:�{h��
  72: ��]�/�^[ț*�Fʤ0�$&oB	�hE��@�����L��(L[_?á�;�b;8�����D�	U�+��x�}�=�)��ÿ���3��ܣ`
  73: 3[ߦn����\F�nw[��T	7�M��r1�&*����],f�*��(eӻ8w����_Pi���r���`L��{K�����h17��KO���B�){�����6�,�*z�fr��9�w�|��i��PK�4>t*  �  PK    !             4 	 org/gradle/wrapper/Download$ProxyAuthenticator.classUT     �T�R�P]�[KW�P�B[�r�"^��a����CH�z���#�����Qf�tƏr�����C����{���J~���@?f���-��h���vJь�W3�lδ�g:v$�ť�w%3܍al�����lp��Z.��\��{�����������eQ���H-��6m!�i�)�-�K\�G��HJlko�`ʲ����1-�ud:��<e�؎乜��igǶ��^����ɼ��g�sd Um�|��l���r5M��,UR'�.C��>�Vl��Fj�L���Z��\h��R��P�*�^E���F#CGZx��uw�*��m2t项���"�&�$^�K����hzqaɆ�K��*.���t���<�3T/.-�H2�>/I.������3]Y��P�X�����:��L 7���I�s�bh=-����-{�S�A�h���^��ʛVJ���Q���N�w��b��g[��~RO$a��-z�~ќo�W� �A�9���+���P_b� ��c1����0�ޓ��A������U0��p,��)A�;�j:�c� �d='��rRJ��P���*&1�`	��?Ƴ�8��#�Qь���Py�>h����a�!��[�+���3Z�Ѻ��J8y����h� �j�;�`�P�Jz�pmq�=6��n���t=��� �"-1����
  74: |�Hr���報2��OԴ��b"Iӽ�{�>���#-숽� PK����    PK    !             ! 	 org/gradle/wrapper/Download.classUT     �W	|U��d7;�n!ٶ����!��v��4�B�^!!��.-����f�ݙef6�z ^��G-UQ�*���4D�jiD�DE��>P�~of7�$k�O��o������}���c�?�0�u8�p�����Jt�k�����`E}ETO�Ԅb��L�1Nt�'�brZR�`t�G��tҬhT&��HŃI%T���M��F�m��Fc�0�H�R�k	�Z\�87T-N�n���荡���`��T�,�1x�zڈ�j�3�ЍxC�Pb	�0j(�7��ZBWb�J�+#JCB�����Q˃����s��;
  75: ���9e�q��f�jZ\Wb�i����t����s؅Hs����B���M�;lӖ�h�TR���[��1ܫ&���X�EQ]#�X�y��$�[h��#�R�!Gx�<�~r���Z[��k�}X��^,E9òB�=��A�e��9XV���H�>\�^p)ÒYK�"^��b����Y�mY:	����x*���=�d�P�u�1˶�z.��ŨB5�K���r��2�$עN�gX:����ŉ<�?��j��>�{��l���%�s�\�Jr�c�l���ޯ$�܇9�Ȕfc�|��S
  76: �݄f�+�U/����V�/,+�A¢Ep�j|X"�Z�����`ê��q�i�۱�/�m>\��W;å�ۃj<mp�>6�5mQn�Q����)�э.
  77: ���>C�5ڧ�Ri��i��+�2��qzQL�ԧ��^�0�H$Qw���n��b�֭N^���c�Xٛ]Q�!^�������47(Y�8����;%����s�ԱR���|(m�����P>�pɹ��498ɷ�EyJxك�T;j�1���b�\&�IH0�.lu�*	�էy1��k~�㚥��)��:ݐe�B)�>��Y��nNi�B\4��N�2��b�`�z��o�+8�Z(��&��47S��ӥ���܋�x�����a}]X&��5D�K�Y[m��ƭ^܂א@%kQL5:�j��}>�Ѫk��6�82�9d({H�o�u):���vR9{w�b�t	�$��.��-i5��f/��D�`�b��2�Yf�)Xo�ۄ��S�n]x�;����g�S`�Dmڠ��;�{������&~c�f��2����/���nݽ����k��g�RyWoo�l�_� Y�;XV4Y�L��%Gg|.�&��#��䝶C�uJCH�=!�۞��������pH����z�!��]�(��?�{�8��P	�uC�ɶ[�}��D>.r�^��cT#��&(�|�
  78: ��kct1�f�xyK�p܋���fVHI�t�M$� c2z� �d�,��P�_2��F�>������TZd�v-J�$%�I��wr:6�����'-_���G)�>+�u���窜Q{���m�7;H�Cў�r���)"�6�ӵ��@��9�v�e<�ŗ������F	_u.��qK̇����Ň'�u���`�ņ��X2P�Xh�b)�x��:3�8�h�K��8�E�c\�w�߬��w�Q��2䦕��+�>�;P������n�uhQ-
  79: ˔GUkh��UMY�-�L�Rt��%G�qzJ���wR��(7�&��R?�CD�D4M�.��8I��c���<������>\$�"[Y���9�h��͐�$���P2��;gQ1�C� f����DO�5�L�G��Pe��Uf��_��)ᯔQ���T�9U �d���7�]$�?h�n��oz�u�����<��<�'�eb���21�ِ�J�|G��VK	c�a�PL<@�vK#퓸(��S����n
  80: 5wa3}N�!��:�6uMa3�H��(����;k��\����S�� �h6ǖ��5�\(�����;���ck�q�Nc{��n�j�㚕�ё��6�"t�,�-��#^5�pDHȠ����Hg7l��M��M��Jj��W\w�d��iG���I���,���A)���mXN�#W`�e\f�*z�(�H�o֠��;F������)�TD)�����i�M�`DP&��x����׋"T��j�ex^�e�G%/���f�9�;"]6����:�� ��Ӹ3�7��dp��)���C�:
  81: �.�ww��5A_�������G�#Y[��������'&1�'�MF"M.�T��?]�����&����?�"<R��B��7�eOO�	or����7�����d!�_�;��[�>��˲,[l��9��g���:�g��	'h�8A[��S�	n�!��6���p��"��n�>I�P������6t�_NCUL�UD�-�sp�b���ؐ�ax�d�]d�p��s�o�/sX��~��:���%�ߟ�@�8��K%�������l���K��\aO��jå%u�RO}��\������b�-B�PK��Af	  *  PK    !             - 	 org/gradle/wrapper/GradleUserHomeLookup.classUT     �R]OA=C+�~�XQPTdU(	�I����C��$>5��������n1�C���&� ��h��/3s��s�w����_�cI���i��F�Jk@��o�VO_խЏ\O&n~h�<�1�e_Ɔ�'k�~�o��Ӫ9�/#���nl�Y�9V�~�{��1���Ɛ���8�I�\��Z�Q�f�4��j�V�*�v]��C嘎��G�k%����7���~�S#i�CV`�X����1��d%9L
  82: ���w�ۍ��^s{�Q�[�fg��E]����h%#gO�-�s7y*���	���,u=�T%�ɭql	�Q,`
  83: W�)[��ٛ���j��	�9\(:��T!���,U.:Y�H�p7
  84: ��,#�������)n����<wjV�G���$<������%h��q	�������r��g��ICE�2Z����/�z����'̝�v�./g�?��{`,��:��PK�P���  �  PK    !             * 	 org/gradle/wrapper/GradleWrapperMain.classUT     �Y|e�?g�1���+��.�eI[�i�	-��[R�W۴��4e��Lv'��ݝ�;�6�x*��^-r��`|� ��@�"jAEQԫ(��^����
  85: J����M�ɦ������|�9�;��7_z��ǉh�4�t��7�Z���>-vHO�k�5�������J$53a�C)#�c=�'u-�csPˆb�z�P6��ք��dV�����PB��kjZ[s`3����d�A-��zz ���L"=���z&�����ᒆu��~��
  86: 1��c�21}s"�3-72�-���d��!=Ӹ�z�c�ui��LN���i��Ƥ�h��w�3er39S�gZ����1j�b�7�ږԲY�T&߀n��&���væQ��id�X.�0���l��TAs���V��LspP�eK�t��#&wA��|*-�*�E�Aɴ��d#F�2&S$�����]ZD~�Σ�Swd���e��:g�um)]��
  87: ��u�T����=�Ĩ*�Nն���
  88: ����`�~W�`��l8�V1���s�1��`d�Y7���R=�T�����$a4
  89: ��;5sF�����?�R!�2M�kk��VӥL�3�ejK�a{�^ "V����W�Z
  90: �Rؑ�r&Y��xi�-��uy"�07No�+��B�*5S��֝ZFO�^��i�M�[K�^�j��^���i��
  91: m�4e��г
  92: u���>��DPe��ʺ2�ᤜw�N��+�V�K���n��mq���t�;{�S=�L��S)-� e !�gd�¨A��>���~X_K&�#��Ci�Hzǐpxx�C����\����`7�x(Z�A#��CkƐ%k�f���\٧A#�4 �<�6�L��Zf ��
  93: v��D�� �LR�C�l��
  94: !(��%tS�V��	+��YSO���:�4�"�3��H"��wB��f�<b8`��A=����@Poh��S�b�95|XK����n�	q=�$
  95: ��,�o�7
  96: >o,ƱuzK&�#��ղ��%�-r��e��nV��t�L]ZN��Q���MRتe!�L�!��VͶ۬�Q"��]��{+�M8ɿ� �m��X
  97: �K-
  98: N��H&�d"w�;T�����,c��T���-jQd����t+���鵂ay��od�p����e��iK�,Nkco�1C�~�Q�}�Ťhٮ��3Z�Hn�ɤ$ěid�TS�YX�z>H�V��CE*%�2ݏl���[?jZ����TЇ飨ik�����K��'��_S_����Lp� �5���xϘ;
  99: ^6��O��*=D�f�B!�N2�^�~X�G2�� 8W�?��=
 100: ��B��i>P��g��L׬����)��l�/[p��`g�l�YzR@��H�H��K�k�j��_�:-T�Ӛ_�/"��~ђ��ρ�R.�LϨ�%�
 101: ������ܰJ�g��D:���/��:��uzN��;gS���I5�-�4��Z�s�Yn�C�n��aq+��x}�k9�(�p��DV�_�K?�K���������⧥�ّɈ���J?��"f�M4������~.�;��Λ.Jk.�����K��TzQ�&n��QCCeş�$�-�N��_�Ӱ7���ȼH���# -��?�G�f^��5%u��_m���$1[��V��!_��+�2�n��x���C��[t���Hǽ,���!v���V��U�\&���arg��eVTv�G(���\�cF6�l/؋��s�^wn82�CB�L+ȅ{'/��|�,6Υ 2W�\-r57+|�,9Q�
 102: c��c�0��Pnz[YHӳ���\�K���Ѣ��Veƈ��!-�$
 103: ��
 104: **92'/�*/cLs�2z�3�N/���z9ȵ(�R/[����!ۑ2�����j�L��&nн���Kf�݉Ҵ�/�.�R:�hI+�;����1-�Y�R������֣A���E�]X��z6�6L��Zz�d3��Y�^䁭�{#�q(7$3�E��[z#�n����8��ӱ���]^nAkǛ�u�qn�s��8s�=c�3�<� �o�-"6����3����>����eA��)#�`Z,�f=�J��)XF1�&HlE%��x�}`G�Ԡ�pڙ�����W��{�j4�e΋‽����ۯ�>> fޣ�@��A���KM�k�����E�}�z�fV�����d���cT>7�?��Z����f��2���x��c�Y\��X���2'�;c9�2�#�����9�;���N���C|��F�yx=)fZ�.8���z~69�r�11�	��ڶц2����
 105: t���e�;�Y#�̯/�`&N3EAN�Y��ƙ.5���ߤ�q��Y>�1�n��R8�&���7��'Dkٗ��Ź�n���E��V�Q�ۑ0���vG����s#+a���Z�ޛI0-��Bf�����`�SsL�������"����j�L���K����lV���(f��4e%-��VϞ��� ?��{T��1�zwo�SX> �:l
 106: �[X��V/��J@1u�������*j���aAs�X���6�&:Ӧn%�>�Ł����ӎ;�i���T�c��螞�-r����kղ�Y'E>78[�ܵc[G�n�ǦAZ�T��9�C6�c���������YD�~4��e��KۖX*����"�y��% `&�%�˵�;u5v̊��?�S~���n�j�1md�L��V.$
 107: ���͆������%�+�+ԏ���p����WT���0jC2vH����Cq��^~����?*��3�$�ڏo��:Ο��+�6�'������f�q�5�etx\`Ⱥkċ��F& �(�qc�n��ɜ�ۖ}��T�����;���6DV��m^��X�柸H��׺�A��'�SԽ��Hٖ�nB���9��/U���ƪPՠ�N�(�\���լe�T�k��@�-Ӓ��ʌ�B63�H)��l��>��������OL�~*3��֝B[���W����dv��ֆݬv���7���/���a6�ο#Ud��>$�� �Ϩ�	��3�J!<-9�^QV>Y��"��x%3���1��S$����������o+��au�,yUi��.�$r�8~^[qi-%�c���o�5�4O���g��W+8"�RP������W��WZ(�T,��(2-��~$щfmʎ�����xY,]�J�KK��a��PȲ��C�,�V�K�R���d�2�v�/��U�\Z!��:+>�����%���<)(�
 108: t+Ka��BK��r�� �r���R�za!`2ъ�h��Ij��0���܄�����=�K7H���}3(O=+���;�F��LjR�BZ[rcQ
 109: %K�$���!$��eF�ٯ�K�2i�t�*�%I���E�t��*iS�d�L�/g�uGn�5PTs`[ˮ@"]\�Z:+WdW6(�%7r,
 110: �4^����9Ij�:�<H�Q
 111: ����W���#a�˩)�+�6t�v�� ||�G��	 +�O��fe��iX� ꘶ܢ����*�l g\Q�+q���0�B��%$��aZu�kE��q��D�(1�UL������
 112: %�:9�Z#�x���Kq̋�T"�b�݆P�,1�,�M��3F*3�zd+Zj���9k�k�-f�k�N���ɪ+,~�ht�Ϸ����\:n߸IZ�ł��C6�nQ���Mw.էgv�"r�l�W�)�ǒN�y	�*�����<��Su���h$O++k��x\~�n�.{�60EF�r�85G���i���#���[�o[e��;O�F�7OW�#�7��(p�$���E���X��R��S���$��뱚�{�+9�+��a V��$�i���ӭѰs�n��N�����Q�k������aW����?B�1��~�#�1��|���?��H��<�8����ʼ���p��șg��X��8N~��P�����<=����]#g��׬��?�9O�l�� ��Z�r^k��|��'�� ��R@ 9'A��{l�����i�b�G�b�~��> �
 113: ��+y��q����"o�C�a���XP7�]��b��9X��Q�M�~��?���!t��r�|EAm6^��//�]�&�Z�C]����I��Zq^+$�V,QÊEV)!k3�r ~%#gN�NZ)�/�Sb��U hyf���S�c�{�� �\Q��������IkSg��}�(ϋ�M�=�@���<_�g��s~K��V�4��ڂ���O��ѐ8reeL���9�ub��8����aWe�Ѱ��a��&��˥��y������Z0��!}��G}�a�/?e��(~>�m{|�1Ɲ8�4U�ЂH.��ݐ�B>�>�ݳ�γV\�"B3�u>�9�=c�b��*Y�}�n�Xy=��(~4��5y֎;��X4Z?�ˢ��|�k�S ՟�,,1�G�����h"o�oIW�(�94ʷ >�}�o�i��[���h�|�p�~w��sa;�Q�S!�<Bs�nG�lY&�1~g��
 114: +>~��?����y�/�����MJ�?Y���O�_��O[�%���K�N�?h�YX�SN�(A�VP���gn��GĊ�'�W�A)$���L��!�A��������"5��R�Eb+����)��,%T�鞠y�O���ш����P�������]"N�.��%�6���'�����7��!aO��Ƿ���������'B�P���)��0��U����~L[��엟����B׻����_/փ�_��w�#�9��-E���+����>6&����r�/D��}�<�}�=~�4}�./9�>Ђ��u�+O`ܷE��IB !Dm�%DM��4'�5*ͭ�K�Ѯ�4��q�H�w��!w՟���RUt�yiQ��1Zu���IK�R`TZ6&��ɠ�K��[�8|�%=>�R��Ê��U=���{�R˧�ެ��:�������`��Ou���N�8?�K��-��)Q��PQ[h~��O�i�E��kv�3�v�v������q=8�9�&ɾ⺅�kNQ:���W���r
 115: J}��'�g��s�y�z>���x��܋�G�ܫܫ��Zw�znto���ݝ�A<#��s�������ov�[�<�ӂ��.�[�.�S����N�I<�����n�6�I��䠽�$=O��4���M�yށ^�^R	�>J^z��Ѓ4���y��g�p%UJ� ��(UI��Zz�:��y� -r� ����w4�bG]��IK��ԑ��P�q]���8^�eN-wʴ�9�^笤�� ��T뼔V9�R����WS�y��1jt�����j��q>H�8�K�:_�˜�PF������)���t�+Eͮô�5LW��K�\R���Z�k��}�����Y�B[��V�k�)�@��?AW١/��PK�U C%  �)  PK    !             " 	 org/gradle/wrapper/Install$1.classUT     �W|[U�ߤ�{}}�h�vK��utm�n���`tL*��u���k�-�+�˺� *"""�ې/���vi���!��S@AtQ@E�y�M��]6��/=�܏�u���s�|��� ���.�l��K����F3��W{�뫃v�ϊ�e�|Q;d�x܌�F¤�^#������d4Q��1"	���/�}>�et77/
 116: .n���%��=�H���o�f,l�L3n��4�Ɍ'H�/i8�a�/dn��T��:�d<h��"��;nǍP�l�}}f��5�p�Hd�"�7��ƈ7�ݽ�:
 117: <3�hұ"�A;L��f�il�mFw�T���MFd^��󭾴��mr�e72�@1�	Y	g�(�rq�;ɑZ��3�Ƶ�[iS	/#�=V8�XЖǑ�4m�]J�=N������Ϸ)�=�[j�,g�@�f�����yGy�6.8WG	J�P�r��k�=���1�k��I��_3�5���5(�(��S���,h�䝞넂y¦����L����Ƭ�:����F`���s	�q��X�B�ڍ�9ނ�r�Ck�Hsb!_͡ݛQE"a1k;��o�7�hP;�J�	��K��=�1Zd��l祕���@��-2���8�x�2�J���C�	L"g�w'�H�1WN��i�N�<|J(�]H#4��)'�5G̠���6����]+>���)p�QnRpY�^x�� ��	َUc`�cK�1�
 118: VS��8���f�"+��4�d��-BΥ;�cX�d�<��`�)eJ�%�y���	)�T�����"���R��S��p.�c ;�Ew���<t�-#� c�V�	&z�v��-�eV`�1����k,nj�HFuld�6�n��c3(�N�W`v�t�B{�͇�G^��IvBG<��^>
 119: �-v$BiLZ
 120: �Ef����F;(�Y�J#��Y�&P�Eh�ՓĒ���c�%�4�4{R��xܐ�|F��n#w�[�9|��]A90�W�yX�Ia�)�*�Xۚ';���E\M:��J
 121: ����fG�W����:ǘ�*���ǈ��hz�;�&'Iۍ����u�z��UU(U*��0�Ű�M�{XI
 122: n�ȐJ���o�V�x:!e-,���q��	�s�I�w�l�]YT�d����;����,(~�q�n|�"J=�ճe����F�%Ӏ4�:G��?�پQ6'c[}m\�������~���t�H�玴�)kH��b���I(�� ���"{St<���y��zZ��ǌ��զ!���tNٹ�X_2'��G��.cp���9(YH~��q<!P�v�J�O
 123: Ԏ.̑q�R���G��q�පI���j؅��!)�6��t<�!ۅ���`�N��/�؅_��-v2���NU�L݉�*��(��dj61���0z̵q²Y5��h|�_��~�ߌ+��K�r�[�9�*^%���󓑯eqF�\���ӭ��&�N�t�x���$��DC�:��Ι��1��혣j4Ȥ��F5�l�K�'6����km��j�3G;��ߋ�7�7�6J�
 124: �I9v��OՂ� ����k������or�ߊ������P��!v+F`==׷�^#�a^�4c�4�����n+�9sU��`��.
 125: �$ٞN�9�z�ݡ�B­��T��c\.����^ymE�l{�ƀ��0�-tM�	$�z����!�Ռ�t1IL�%t��VD�����\�Gk�E����1��	��s���t���O^Qɛ��)d$4j8;?S�d?=?1?�
 126: ����Y��y�h�as~�`�\-�l1�,�'��t�q,x�u��M�GI�Q��QGe�: 껒}�.| 4�@�3
 127:  	ө27����7���D�J�k1��@�M,d�$�1��~��Ų��jW�j_��9V�<}s��͎h�D3���Y�0CU�Ū����r���J�=U���BUT/�\�*�Y2`4�H/�K�@A�Ĳ�ΰ�윉S	�Fw�f�c�r�P_�B/kj�Nۓ�n3��#D�THME��K�=�3��b��KLRz�p��2L��
 128: �ji�������ނ��ہi�;P�ہ���5�9���JP���}��I'Iw_W;�����ALKa���]C�����/m�)�8����L�ԭh�K�e+hO�*)�F[�A�h�π{b���$!�R0Ru��i5���>����/Ĭ��S�Bo� �~�ݬz��|R�Z�n�V���p��0g��q�_@+��ꓤ��;^u���>�ps��Y/�ˋ��l�Z�/�'H��������y�.�����W} _H\/��������5����U�u���t,R�mwvx���b �{|^e��a��� ^�,/�܎�ʓ�S/W���p�S��>���ӯ�H�^ի�2G�K�\���΁2�]������'�����!<3�gS��WSxޫ���s���<��>��H�*}�<�+)�+��A���jW����7N	�RЬ��.4�"��궏;�)@�R�=9� 4����K�<��܏��a�G)�g /H�}e�E~��Q��������+�.���2�v6{R�����1$&�D)eMJLۊǡ���W�44���.
 129: �3^��0"8���l��^Z�5^O���WvB	���^���]���,_i�d�U��c��7,�S���@��c�ۍ9ނl�
 130: ��Ģq�Q_[��w��"rN������0$N����-'ʽ���I���y,���M�<q2��wKz5�L񀤏Q��t���e��5��Mj�~H��(�XM�	T��V�9�V�%=Y��4*�ī�q��Jҫŵ�^/�Kz���!�Wҽ�y�/��$�_���u��F��\�"����U�L���u��2?��<S�\J�)�;]�H�)󏹞�<S�r�"y���s�!y�̿�zW�L�����2���P�L�w��+���x��	<7���W�L�N����/�w�W� w�~M,G1��. ���Z�I�5�� %� J]a��.��j��/@�;���^Lso��mK=n	���PKN�!��  �  PK    !             - 	 org/gradle/wrapper/Install$InstallCheck.classUT     e��J1��X����z��n<u]�(E�AAA�2�N���d[/�>�o�^� >�8[�����OH�?^� lb^�߿hܻM�R�rwݠ��� �R�e��؋��nH��ěi��C���F��mKm�榡��S�Gsg�ln3k?����,؎���R��Ȩ8d�G��Y�76�6^�z�C	B�|�tM@GJ��rbB?4��ɿ32M��'�ͤ�K��0�X�S7�'}-��?o�P�1�~_��I�~��F%~��B[*�5tF�ʐ���_��,�-S��*Vف���_����@ae�ʁ��2��8(al#�:(c<�f���P��?3�jNqU�΂���s�-��T֮�_0�����3f��ZX>PKD�;k  �  PK    !               	 org/gradle/wrapper/Install.classUT     �X	x�u~C ����d�הh�8H)C��M�RG`ɖ���\	�ev�h�J��i��i����r��t['�Z	��D��uӤiӤg��nڦW�އ��o � 	�i�Ofg��̛����7|�;��ND�EN��s�w=�:��O�f�5њζ�Z�V~��i�a���1n�9]stL�kN<=��O9��Ӛ�j9G��N����D��=F��������>[��0��k�m���a�m�c=����������t����`�����.h�e�u��Z&�w����	��0W������vZ��i�X�ѓz��S����56�ۂ�'k�O��݂댙���������]��M�
 131: �qZ�ՓN뎳_35yʽՋ��mS�uf!ؙ�ҧp�νK.��������p���R�Z�5w��q��h�ۏ�ۏi�R�O��vz��Y���� -o �	R��� )�������\�y�֭��j^����I�L�����=���Q����7��>�)�vLw�r��j�W�%w�v����
 132: 
 133: V�V8D?k8�#�P�6S�B��.A-R����>+�ހa�OaAz~Lb���ʉR��p`��
 134: �S�9��a8�1�~l����A�|��<�K�mkr{?mWh�o���6���� �,i��� �N.��|�]t7�OZ1_G?�#�o8{�"A�Cm��^�OУH����h�/�nis��KwT�rմe��a��9	��N��t�{�N��gT�R���Q��Z��M��f�&;�3/�K��S\�����^�c5n�X*H{�~���A[�G�i@Ц�"R�ӠB�()����4A�l����%�W���Xj��k�a	����[$H��0���3F�V�	�m�a�^�r��6�����Vؼ�O�:Θk�oS�35�L05p��tBо7F��|�Y,�5Vᾚ�5HFv�B}��$hg�����{��wv\/E=]�w�s?���o��$c<�[��LC|[�3�~��Lc�I��锠����[�Z�Oyf��ʗ�f)d�D�07o�_` _�X/Cѥ�B�F4&2��������$k���9�у��z��/6K���������U7�-�g�w*t���8'1��"3ƻ`:�zP?[Z����nz�B?L��T���ҏ����C���6���.+�M�O?κ|@P|i-��C��)�ת�:\S՟����G9k����(H�a��cl@�P.l��9?-h%��3�X���s��3��&�)QW�am�e�Z�Z�f5 !sg��f�P)Ք�k��vZWGu�T]-����1��6��2���W�q�ŏ�n�^<2�!F
 135: �-�ma�;�"'��Y��d�Q�Y�\5���൙��2�D�l�VSLW^�fm+�(w��,�Ⱥ��/�_}��v.��9-�&���Jó4Y)Q�Z�̞��T��#�c���N8��2v0�K޹b��	�D6R��	������Pm>��@�d�Q�Zp`MM㒸n�hLut]:E5\��}�  Aq?��sk��5�:j1}����g��y�hJ���y�%�D�A$!�s�Xi��@�����A�y��ܧ@�1�sG��8�R�*%��|Ș(UWW�����M����мbi�Y���.t���q�~U"~�����d�e�{sz�" ?˥�g�:���Ϻ剅!<��~��ye��{�椟~#p�������e˒4��![�g�V*)� զ�ee��^�����	J�6}^�W�w�d�x��S�p��-1˗@�'��Y���*/���۪�4��
 136: �%4��j�2��P�/��r�	pvVPg8Y�t����R�ϟП�k�^�u���p;��	��%稿�����
 137: �I�Pd&�����*��* 踢�j�������X����]�|l��[\,YcA�6��?ӿ ��t�o��+}thܶ�h����b�M9��*�I�]��T��B.����_*�L��<<< k9�?V5��yU�}A݅�	@B�1. R_�ʸ��|�UT~�:�xU�E`�x=l�n/�f~7(���"�|A�]�2�J�b%�$VUc�=��	����d�EK�I�Z�(�Y���,���HM����#��`��vZ'�+"$6��x��#�S �xK�f���w��)�vq[��&�3]ȡ�:��v�v�V�ӛ�|���h�ТM�b�rtw5*���Č͒�� �EDa�i���>uI�*��@P�EGt�D��9�g%�a.�6���؁=�2Z�,;KS����%c^�b����1y��{'K�؍���{	"�t� �4þ4���K���E�"��X`8\y�va�AP�)1��G�oNB�������E�Y����Vȹ����q����v��ו��F~�9�R8����q\T�u��}��"��[�d����Q��[wĈB���ЉG�d�|���"Ź}�@9�X��4��@]��L�n��j8 ��F�^яrD���;���5TgY��k��E�8#�h�s$*���>+2\�4L}����C�mCV���j�N᫑�6%� -G�V�Jp�I��@ދv}$u|�������4�D����U
 138: Ů���>��6������h�Hw-Җ���P|p��i[j�e������5ڑJNӛ���ty[�������T�W���DC��}��WL�|5:y��,���ϒ?5艍4�Ff���k�/��i�?E��T-6�Hl"�y��֡�ل�M�T2Ҕ�����
 139: G��wF��qV�a�M%_�����g�!��>E^�r����X.;�N�S0������a�T����N�X�����*��m��&�(M��Q�1Ϟ�B�e�^n��Pn����7:Mok\E�	$|!/[�L���ij��|���"=>kӇZ��.�ٿy�t�H?���~���t�Z|���RG�ŷ��n�����X�c�ﲐw��"}�(��Ї����!_��>RCE��P)�*�%8�٤���:��z"#��/6Ri����d��R���ݐZ܀Zh���6 =sێߝ��Z	����|7p�]Fg/f<h�"�_q4��n��wC�����D7l�cg��E�y^8_�_����E�T�qW9:��FWS��P�X�O3�n0����� ����ǋ��3�	�/^��|��;:u�St,�F_fɯ��3��Րo���H_Kx���1ZY�׫S7�O����O�|�`'�v#V����?7�
 140: �WZh�lג*�Vj�m��d{7��^�'�$��0��q:�i���8Y�-��d˿,�A��lK~Q�`�u��oTl�1�d��������P$u�B��艦oN��!�P�?�'V��'� JE�ײh�DӿK���������{3[}"O�@��ĕX$%Cy0Z�҉�vQ��n�����.-;�,8iF�(�Ɗ���`.�aw��W$|Rd-�����[���G�FF;���8.ĝE��Y�u�(bW�֢x���.�D�����Ž]ކ�@C���$
 141: ��PwF�����5ʚ@K������>V��O}��k��O]���5<�w��$��(E1��<-A �w�V�S7���)r�m���j����ѐ?�_G��[q�
 142: ����(�*s;z�s����`�f�0,
 143: B���>���"S�tdZ�ݨ��%
 144: 0�υ�����A!��bT�}���Y���g�q�}n7��vzN������	�����˲�-�9z��-�_���>���:}C�����( ��-��#�/[��D��s���xJ�Y��&��-��#T'��i�d�:�|PK1"�K�  x  PK    !              	 org/gradle/wrapper/Logger.classUT     ���NA�߱�B)�R@���~��e-F�PcbHLH5�`��t{�.�G��1r!\���^�e<C��І���Ι�9�L�̟��~X�)p|t���IoJk�����[���n^�qe���-�xH.Ɉx�-#�j��%^�o�J7��c�����\_�XkOXV����u9��Q�!�����os���8^]}�Z5Zt��H7�$����|ڦʖK�Pv:����)�0$0�'��J�6_5�Ȋ5�L�G�3�d�%���C���y��N�L`��S�HK�dp=���0r<���L�~���}�wa��QL��f��}f����Y3Eҫepsc�ż@��@CA@먀�g���4p��,O�#���Z6�2l�AB�E�R���k�UȥE.AW�w��[[+WC},(ˇ\�����s���$(��\�M>��:���פ��Q�j�7����b��3�����,�q���?1Y����POyL�4��&[���c�����	n�	�p�',����p�+�������܏�,R����!n@��M(la���`�,�+�`�2Ɨ�Q��PK�	�<    PK    !             & 	 org/gradle/wrapper/PathAssembler.classUT     U��J�@�gM��ZE�@�S+MC+�PE���(���L�m7���փ��-<	| J������~��,���� c�c���GO<r�&�S.�|�e��J�J&ȋ�[�(�e&\ 3�K���΅v8�e�T�#�LFr|JY���WZp�FdѤ� ZeR�k���"O�Q���?��t���x�428*l�V$�G+�mx'���9�c�����&o�ʪ-�seTu��w�PEXo=���3^�?���a�A㊾ #h�����a��.�R��y����@���PK�0[�$  j  PK    !             . 	 org/gradle/wrapper/PropertiesFileHandler.classUT     �T[WU�NI3qZJ��*6�!$D��m�R*� ��z���I20��L�,��}�G����>���e|����!�.	�f���ٗo_η�����(<�',d~�幱&�Bl<fcɘ�T\���ة�S$����,s/e����U+^l��-O$cn)U�n�T���c�
 145: ��̾�jY$��<5BGa�L[i�%���Q,�g�/gR��9Ơ/:Ui�[�%�,�K�,�ސ�u�Lߑ�|Sx�f�ۤ��|��-n����Ua��gK�_��|Qix2\�g�֦�V0��ǪoZ�Y�N0D��t�������A�:�8����t,�"Sm�������&!2�����gu�ACWC��S�9
 146: {մM�z=��ΣWG.0�4g8c�Uї�W4����Xw}[G.2,��7���붗Sa�N���U��0@؍\��W�R4�u���kbsQ��咈�BR����4��U�/$��p��̞� F0�����yT��
 147: �Fl���>D{c�P�6	����M!�qL(�����P�����R����uh��!�pj8��طk��&�����e�/O�G1�n�3S�fxë潽��3���9n+�,�ڢ�R�Č��0�w�\R70?Z�X����%r$0d�q��Pw������M��,�<o�� D�-�?:�𵚇o.4���oV��}C�j�4|�O���ܨ�VAm�����tdt�,�b:����TE�4�B��ˍ�'����f=���M����nʂJ)�� L�G|I�I�T�Ά��^xK�
 148: *���s��~�8=Ik�����:W��\R�K8IU?bB�0�@����-Q��'О���6zr����F_nv(�Kl!Z�;5������-���|�0�|��c�>�1��j��s����;�S���a67��_w�J��H�%)j�-?��#��>�>E(I诶����%V:�-kX�amh�+J����\�"ZGя��z?�����f�$=�6���v��#�&����PK]&�o�  �  PK    !             - 	 org/gradle/wrapper/WrapperConfiguration.classUT     }�mOA�g��R���*r�}�R[�V@�'�Ŵ����m��\+$� ~_hbc�?��8ۻ��������7�;������ ��M�./�b��ΘZ��RE�KZ�.+Ԕ55Y���u�0j0V��,UY��h�q�B�͉u)Y����s��t)��Z=�𕆢��Q��4�*�*c��J8{�t������|.Yf��G����K칬0QM�R�N�
 149: K]�^gz�e75�"K��g/xO�9M)T�R{�SV2��O@(ˆ�����T*3S������x`���
 150: &�q��5�Fۧ
 151: U�Y�5��r���=K�/4��\cZ�$@v��SE.S�m�%����_�U�\#��0�~��M�ʋ������~a;�r�ն��Í�	�N����@��wX�=�,O !�� ��{@`�`�֕҅bWk�7��O������n�6�ģ�nm��;�U����x��o[�λ�"�^?䏜��������#� ����Şa�CFw��ᇚ@���#�`����;�i<��� ������[����e��6`�!�b�[[�6��4�n�h��������w�jB$|�	�ܛ��t(l�	ѯ�!�A�N���'f�0��� i�Ch�}�o�b��!�G��+>��iw|��3����/���uŧ��;>��9W|������+.��g;�
 152: O��v����u�g��ۍ�{����PKRʸH�  P  PK    !             ( 	 org/gradle/wrapper/WrapperExecutor.classUT     �V�wE��>Bx4-o���i��Z
 153: ���V��)`���d�.����M[@��~��DA�D~�~���xg7i�6�pNN������3w�o�`n3�;y���x`H��p5hē�P ��3�"�����Z�Ӽ�.��%#��#�6mII1x(�I��R&,C--��6��ޚ�'��Bư^OC��d�s]VS4;�u�|�|k����p��N��<Q-���.Y�MOER��PxdL�2�G�;r�8�gMMw��a�iT�(�����qӅj2��5�4en0,�u���D���0,(h9N8��cҨ�kjRN14v�O����mh���������Ѹ����q���jy��\���5^x1.���7抯e^x0O|�`����*
 154: ��ˆiخ���{�~�@ѤD!</X�!+2�׹��A0]۫+u�]�����/�`� � ��>I���(�3�E#��qCkQ�6G�jr]��|�gy(+'�D�%Rq!LE�;�iJ���8�\L*7#{�;)��yЌ�^b����T[�m#U�D	&������Cm�ԊX�b���m�M�G����!�t)�[�M0O[�֘�aq�"�Ǳ]��>-�>�vc��Ă������Y�t�>E~��F���Z�ٴ]˦��Z��Ǳ�˰��(���=��~re��j�	u/��cr&Jͅ;��O��"�3N�bNL�4mM?����O�N$?4�w��JTC�=����9͵�i�N/R:2CeC��؊���c&H(QiUh�aXA��I���L>�x���_C�EC؊�0>J8cV��M^�qT���v��Yդhv��y�iV�3�:������Ɵ�n�B+�'u-��_c�7�q���;Eu�E�_IMOKf��q�k��P����W<x	�2���ژ4D���ӯ{po��/��y�aiq��T3Y��r)��[��oI�ͷ=8�w����%\x����>.��,�V>�����򑕪��	CU\�Ė�L\6��,5�DiU���am�VQ�|}!\~ɰ�G�JJ���ds�?�U���2O�e�l���|��Ll�~KW�Z������e{�M�f�Y6���$���\X���$%���I7�(�,������O��
 155: 9Z~�qU������M��{I�F�*�7�K�!�ff	��&=������VT�.zI�d�C\��錺�W�q��W���mIO�.�XH�� ��
 156: T���M��`(����b��	,���7��VZx�,.������B�x�BC��}n���k����a�Y����ѓ��n_7��B�+,D-��=M���C�giύ��XH[x΂ia���KX�}'b����T4E}/�'�Zh��\��h�e���ڲmy#�Tp̖�qʖ��_HU�<)%$��XwS(8�wC>�p��swHoi�6����!�Q�9$[�ױ�w��Ww��γJ�����V��Ǻ*|磕���&�a���O�����^lK��s�����ĺmr
 157: QM�);]9�f����+}�����a�įWJ<ͳ���)[{����؛ӱU����{rؽ4�"�M��D$��*�zy���]T���>�*6��n��MFh:"���S���� PK �#�U  �  PK     ! ����  �'   	               META-INF/LICENSEUT     PK     ! �i�{   �    	           0  META-INF/MANIFEST.MFUT     PK     ! ��"  p  1 	           �  org/gradle/cli/CommandLineArgumentException.classUT     PK     ! ld�Mn  �  & 	           �  org/gradle/cli/CommandLineOption.classUT     PK     ! k��[  �  3 	           K  org/gradle/cli/CommandLineParser$AfterOptions.classUT     PK     ! H�.  ]  < 	             org/gradle/cli/CommandLineParser$BeforeFirstSubCommand.classUT     PK     ! ���  b  = 	           �  org/gradle/cli/CommandLineParser$KnownOptionParserState.classUT     PK     ! Ā�;M  �  < 	           !  org/gradle/cli/CommandLineParser$MissingOptionArgState.classUT     PK     ! �#�  J  = 	           �#  org/gradle/cli/CommandLineParser$OptionAwareParserState.classUT     PK     ! "83|�  }  8 	           '  org/gradle/cli/CommandLineParser$OptionParserState.classUT     PK     ! \�w  C  3 	           )  org/gradle/cli/CommandLineParser$OptionString.classUT     PK     ! ���
 158: �  �  2 	           �+  org/gradle/cli/CommandLineParser$ParserState.classUT     PK     ! _rJ%t  �  ? 	           �-  org/gradle/cli/CommandLineParser$UnknownOptionParserState.classUT     PK     ! �#���  c  & 	           �0  org/gradle/cli/CommandLineParser.classUT     PK     ! l�A�<  �  & 	           �5  org/gradle/cli/ParsedCommandLine.classUT     PK     ! Sh�RS  �  , 	           =:  org/gradle/cli/ParsedCommandLineOption.classUT     PK     ! �50�  �  3 	           �;  org/gradle/internal/file/PathTraversalChecker.classUT     PK     ! ����    A 	           ^?  org/gradle/internal/file/locking/ExclusiveFileAccessManager.classUT     PK     ! �UQ��  �  > 	           ]A  org/gradle/util/internal/WrapperDistributionUrlConverter.classUT     PK     ! ��>�    / 	           �C  org/gradle/wrapper/BootstrapMainStarter$1.classUT     PK     ! �4>t*  �  A 	           �E  org/gradle/wrapper/Download$DefaultDownloadProgressListener.classUT     PK     ! ����    4 	           *I  org/gradle/wrapper/Download$ProxyAuthenticator.classUT     PK     ! ��Af	  *  ! 	           {L  org/gradle/wrapper/Download.classUT     PK     ! �P���  �  - 	           9V  org/gradle/wrapper/GradleUserHomeLookup.classUT     PK     ! �U C%  �)  * 	           vX  org/gradle/wrapper/GradleWrapperMain.classUT     PK     ! N�!��  �  " 	           �m  org/gradle/wrapper/Install$1.classUT     PK     ! D�;k  �  - 	           :z  org/gradle/wrapper/Install$InstallCheck.classUT     PK     ! 1"�K�  x    	           	|  org/gradle/wrapper/Install.classUT     PK     ! �	�<     	           Y�  org/gradle/wrapper/Logger.classUT     PK     ! �0[�$  j  & 	           �  org/gradle/wrapper/PathAssembler.classUT     PK     ! ]&�o�  �  . 	           l�  org/gradle/wrapper/PropertiesFileHandler.classUT     PK     ! RʸH�  P  - 	           Ǔ  org/gradle/wrapper/WrapperConfiguration.classUT     PK     !  �#�U  �  ( 	           �  org/gradle/wrapper/WrapperExecutor.classUT     PK    ! !   Ν    
```

---

##### 📄 gradle-wrapper.properties

**Path:** `WebToApk/android/gradle/wrapper/gradle-wrapper.properties`

```properties
   1: distributionBase=GRADLE_USER_HOME
   2: distributionPath=wrapper/dists
   3: distributionUrl=https\://services.gradle.org/distributions/gradle-8.14.3-all.zip
   4: networkTimeout=10000
   5: validateDistributionUrl=true
   6: zipStoreBase=GRADLE_USER_HOME
   7: zipStorePath=wrapper/dists
   8: 
```

---

### 📄 gradle.properties

**Path:** `WebToApk/android/gradle.properties`

```properties
   1: # Project-wide Gradle settings.
   2: 
   3: # IDE (e.g. Android Studio) users:
   4: # Gradle settings configured through the IDE *will override*
   5: # any settings specified in this file.
   6: 
   7: # For more details on how to configure your build environment visit
   8: # http://www.gradle.org/docs/current/userguide/build_environment.html
   9: 
  10: # Specifies the JVM arguments used for the daemon process.
  11: # The setting is particularly useful for tweaking memory settings.
  12: org.gradle.jvmargs=-Xmx1536m
  13: 
  14: # When configured, Gradle will run in incubating parallel mode.
  15: # This option should only be used with decoupled projects. More details, visit
  16: # http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
  17: # org.gradle.parallel=true
  18: 
  19: # AndroidX package structure to make it clearer which packages are bundled with the
  20: # Android operating system, and which are packaged with your app's APK
  21: # https://developer.android.com/topic/libraries/support-library/androidx-rn
  22: android.useAndroidX=true
  23: 
```

---

### 📄 gradlew

**Path:** `WebToApk/android/gradlew`

```text
   1: #!/bin/sh
   2: 
   3: #
   4: # Copyright © 2015-2021 the original authors.
   5: #
   6: # Licensed under the Apache License, Version 2.0 (the "License");
   7: # you may not use this file except in compliance with the License.
   8: # You may obtain a copy of the License at
   9: #
  10: #      https://www.apache.org/licenses/LICENSE-2.0
  11: #
  12: # Unless required by applicable law or agreed to in writing, software
  13: # distributed under the License is distributed on an "AS IS" BASIS,
  14: # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  15: # See the License for the specific language governing permissions and
  16: # limitations under the License.
  17: #
  18: # SPDX-License-Identifier: Apache-2.0
  19: #
  20: 
  21: ##############################################################################
  22: #
  23: #   Gradle start up script for POSIX generated by Gradle.
  24: #
  25: #   Important for running:
  26: #
  27: #   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
  28: #       noncompliant, but you have some other compliant shell such as ksh or
  29: #       bash, then to run this script, type that shell name before the whole
  30: #       command line, like:
  31: #
  32: #           ksh Gradle
  33: #
  34: #       Busybox and similar reduced shells will NOT work, because this script
  35: #       requires all of these POSIX shell features:
  36: #         * functions;
  37: #         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,
  38: #           «${var#prefix}», «${var%suffix}», and «$( cmd )»;
  39: #         * compound commands having a testable exit status, especially «case»;
  40: #         * various built-in commands including «command», «set», and «ulimit».
  41: #
  42: #   Important for patching:
  43: #
  44: #   (2) This script targets any POSIX shell, so it avoids extensions provided
  45: #       by Bash, Ksh, etc; in particular arrays are avoided.
  46: #
  47: #       The "traditional" practice of packing multiple parameters into a
  48: #       space-separated string is a well documented source of bugs and security
  49: #       problems, so this is (mostly) avoided, by progressively accumulating
  50: #       options in "$@", and eventually passing that to Java.
  51: #
  52: #       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
  53: #       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
  54: #       see the in-line comments for details.
  55: #
  56: #       There are tweaks for specific operating systems such as AIX, CygWin,
  57: #       Darwin, MinGW, and NonStop.
  58: #
  59: #   (3) This script is generated from the Groovy template
  60: #       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
  61: #       within the Gradle project.
  62: #
  63: #       You can find Gradle at https://github.com/gradle/gradle/.
  64: #
  65: ##############################################################################
  66: 
  67: # Attempt to set APP_HOME
  68: 
  69: # Resolve links: $0 may be a link
  70: app_path=$0
  71: 
  72: # Need this for daisy-chained symlinks.
  73: while
  74:     APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path
  75:     [ -h "$app_path" ]
  76: do
  77:     ls=$( ls -ld "$app_path" )
  78:     link=${ls#*' -> '}
  79:     case $link in             #(
  80:       /*)   app_path=$link ;; #(
  81:       *)    app_path=$APP_HOME$link ;;
  82:     esac
  83: done
  84: 
  85: # This is normally unused
  86: # shellcheck disable=SC2034
  87: APP_BASE_NAME=${0##*/}
  88: # Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
  89: APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s\n' "$PWD" ) || exit
  90: 
  91: # Use the maximum available, or set MAX_FD != -1 to use that value.
  92: MAX_FD=maximum
  93: 
  94: warn () {
  95:     echo "$*"
  96: } >&2
  97: 
  98: die () {
  99:     echo
 100:     echo "$*"
 101:     echo
 102:     exit 1
 103: } >&2
 104: 
 105: # OS specific support (must be 'true' or 'false').
 106: cygwin=false
 107: msys=false
 108: darwin=false
 109: nonstop=false
 110: case "$( uname )" in                #(
 111:   CYGWIN* )         cygwin=true  ;; #(
 112:   Darwin* )         darwin=true  ;; #(
 113:   MSYS* | MINGW* )  msys=true    ;; #(
 114:   NONSTOP* )        nonstop=true ;;
 115: esac
 116: 
 117: CLASSPATH="\\\"\\\""
 118: 
 119: 
 120: # Determine the Java command to use to start the JVM.
 121: if [ -n "$JAVA_HOME" ] ; then
 122:     if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
 123:         # IBM's JDK on AIX uses strange locations for the executables
 124:         JAVACMD=$JAVA_HOME/jre/sh/java
 125:     else
 126:         JAVACMD=$JAVA_HOME/bin/java
 127:     fi
 128:     if [ ! -x "$JAVACMD" ] ; then
 129:         die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME
 130: 
 131: Please set the JAVA_HOME variable in your environment to match the
 132: location of your Java installation."
 133:     fi
 134: else
 135:     JAVACMD=java
 136:     if ! command -v java >/dev/null 2>&1
 137:     then
 138:         die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
 139: 
 140: Please set the JAVA_HOME variable in your environment to match the
 141: location of your Java installation."
 142:     fi
 143: fi
 144: 
 145: # Increase the maximum file descriptors if we can.
 146: if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
 147:     case $MAX_FD in #(
 148:       max*)
 149:         # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
 150:         # shellcheck disable=SC2039,SC3045
 151:         MAX_FD=$( ulimit -H -n ) ||
 152:             warn "Could not query maximum file descriptor limit"
 153:     esac
 154:     case $MAX_FD in  #(
 155:       '' | soft) :;; #(
 156:       *)
 157:         # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
 158:         # shellcheck disable=SC2039,SC3045
 159:         ulimit -n "$MAX_FD" ||
 160:             warn "Could not set maximum file descriptor limit to $MAX_FD"
 161:     esac
 162: fi
 163: 
 164: # Collect all arguments for the java command, stacking in reverse order:
 165: #   * args from the command line
 166: #   * the main class name
 167: #   * -classpath
 168: #   * -D...appname settings
 169: #   * --module-path (only if needed)
 170: #   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.
 171: 
 172: # For Cygwin or MSYS, switch paths to Windows format before running java
 173: if "$cygwin" || "$msys" ; then
 174:     APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
 175:     CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )
 176: 
 177:     JAVACMD=$( cygpath --unix "$JAVACMD" )
 178: 
 179:     # Now convert the arguments - kludge to limit ourselves to /bin/sh
 180:     for arg do
 181:         if
 182:             case $arg in                                #(
 183:               -*)   false ;;                            # don't mess with options #(
 184:               /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
 185:                     [ -e "$t" ] ;;                      #(
 186:               *)    false ;;
 187:             esac
 188:         then
 189:             arg=$( cygpath --path --ignore --mixed "$arg" )
 190:         fi
 191:         # Roll the args list around exactly as many times as the number of
 192:         # args, so each arg winds up back in the position where it started, but
 193:         # possibly modified.
 194:         #
 195:         # NB: a `for` loop captures its iteration list before it begins, so
 196:         # changing the positional parameters here affects neither the number of
 197:         # iterations, nor the values presented in `arg`.
 198:         shift                   # remove old arg
 199:         set -- "$@" "$arg"      # push replacement arg
 200:     done
 201: fi
 202: 
 203: 
 204: # Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
 205: DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'
 206: 
 207: # Collect all arguments for the java command:
 208: #   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
 209: #     and any embedded shellness will be escaped.
 210: #   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be
 211: #     treated as '${Hostname}' itself on the command line.
 212: 
 213: set -- \
 214:         "-Dorg.gradle.appname=$APP_BASE_NAME" \
 215:         -classpath "$CLASSPATH" \
 216:         -jar "$APP_HOME/gradle/wrapper/gradle-wrapper.jar" \
 217:         "$@"
 218: 
 219: # Stop when "xargs" is not available.
 220: if ! command -v xargs >/dev/null 2>&1
 221: then
 222:     die "xargs is not available"
 223: fi
 224: 
 225: # Use "xargs" to parse quoted args.
 226: #
 227: # With -n1 it outputs one arg per line, with the quotes and backslashes removed.
 228: #
 229: # In Bash we could simply go:
 230: #
 231: #   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
 232: #   set -- "${ARGS[@]}" "$@"
 233: #
 234: # but POSIX shell has neither arrays nor command substitution, so instead we
 235: # post-process each arg (as a line of input to sed) to backslash-escape any
 236: # character that might be a shell metacharacter, then use eval to reverse
 237: # that process (while maintaining the separation between arguments), and wrap
 238: # the whole thing up as a single "set" statement.
 239: #
 240: # This will of course break if any of these variables contains a newline or
 241: # an unmatched quote.
 242: #
 243: 
 244: eval "set -- $(
 245:         printf '%s\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
 246:         xargs -n1 |
 247:         sed ' s~[^-[:alnum:]+,./:=@_]~\\&~g; ' |
 248:         tr '\n' ' '
 249:     )" '"$@"'
 250: 
 251: exec "$JAVACMD" "$@"
 252: 
```

---

### 📄 gradlew.bat

**Path:** `WebToApk/android/gradlew.bat`

```bat
   1: @rem
   2: @rem Copyright 2015 the original author or authors.
   3: @rem
   4: @rem Licensed under the Apache License, Version 2.0 (the "License");
   5: @rem you may not use this file except in compliance with the License.
   6: @rem You may obtain a copy of the License at
   7: @rem
   8: @rem      https://www.apache.org/licenses/LICENSE-2.0
   9: @rem
  10: @rem Unless required by applicable law or agreed to in writing, software
  11: @rem distributed under the License is distributed on an "AS IS" BASIS,
  12: @rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  13: @rem See the License for the specific language governing permissions and
  14: @rem limitations under the License.
  15: @rem
  16: @rem SPDX-License-Identifier: Apache-2.0
  17: @rem
  18: 
  19: @if "%DEBUG%"=="" @echo off
  20: @rem ##########################################################################
  21: @rem
  22: @rem  Gradle startup script for Windows
  23: @rem
  24: @rem ##########################################################################
  25: 
  26: @rem Set local scope for the variables with windows NT shell
  27: if "%OS%"=="Windows_NT" setlocal
  28: 
  29: set DIRNAME=%~dp0
  30: if "%DIRNAME%"=="" set DIRNAME=.
  31: @rem This is normally unused
  32: set APP_BASE_NAME=%~n0
  33: set APP_HOME=%DIRNAME%
  34: 
  35: @rem Resolve any "." and ".." in APP_HOME to make it shorter.
  36: for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi
  37: 
  38: @rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
  39: set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"
  40: 
  41: @rem Find java.exe
  42: if defined JAVA_HOME goto findJavaFromJavaHome
  43: 
  44: set JAVA_EXE=java.exe
  45: %JAVA_EXE% -version >NUL 2>&1
  46: if %ERRORLEVEL% equ 0 goto execute
  47: 
  48: echo. 1>&2
  49: echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
  50: echo. 1>&2
  51: echo Please set the JAVA_HOME variable in your environment to match the 1>&2
  52: echo location of your Java installation. 1>&2
  53: 
  54: goto fail
  55: 
  56: :findJavaFromJavaHome
  57: set JAVA_HOME=%JAVA_HOME:"=%
  58: set JAVA_EXE=%JAVA_HOME%/bin/java.exe
  59: 
  60: if exist "%JAVA_EXE%" goto execute
  61: 
  62: echo. 1>&2
  63: echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
  64: echo. 1>&2
  65: echo Please set the JAVA_HOME variable in your environment to match the 1>&2
  66: echo location of your Java installation. 1>&2
  67: 
  68: goto fail
  69: 
  70: :execute
  71: @rem Setup the command line
  72: 
  73: set CLASSPATH=
  74: 
  75: 
  76: @rem Execute Gradle
  77: "%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" -jar "%APP_HOME%\gradle\wrapper\gradle-wrapper.jar" %*
  78: 
  79: :end
  80: @rem End local scope for the variables with windows NT shell
  81: if %ERRORLEVEL% equ 0 goto mainEnd
  82: 
  83: :fail
  84: rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
  85: rem the _cmd.exe /c_ return code!
  86: set EXIT_CODE=%ERRORLEVEL%
  87: if %EXIT_CODE% equ 0 set EXIT_CODE=1
  88: if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
  89: exit /b %EXIT_CODE%
  90: 
  91: :mainEnd
  92: if "%OS%"=="Windows_NT" endlocal
  93: 
  94: :omega
  95: 
```

---

### 📄 settings.gradle

**Path:** `WebToApk/android/settings.gradle`

```gradle
   1: include ':app'
   2: include ':capacitor-cordova-android-plugins'
   3: project(':capacitor-cordova-android-plugins').projectDir = new File('./capacitor-cordova-android-plugins/')
   4: 
   5: apply from: 'capacitor.settings.gradle'
```

---

### 📄 variables.gradle

**Path:** `WebToApk/android/variables.gradle`

```gradle
   1: ext {
   2:     minSdkVersion = 24
   3:     compileSdkVersion = 36
   4:     targetSdkVersion = 36
   5:     androidxActivityVersion = '1.11.0'
   6:     androidxAppCompatVersion = '1.7.1'
   7:     androidxCoordinatorLayoutVersion = '1.3.0'
   8:     androidxCoreVersion = '1.17.0'
   9:     androidxFragmentVersion = '1.8.9'
  10:     coreSplashScreenVersion = '1.2.0'
  11:     androidxWebkitVersion = '1.14.0'
  12:     junitVersion = '4.13.2'
  13:     androidxJunitVersion = '1.3.0'
  14:     androidxEspressoCoreVersion = '3.7.0'
  15:     cordovaAndroidVersion = '14.0.1'
  16: }
```

---

## 📋 capacitor.config.json

**Path:** `WebToApk/capacitor.config.json`

```json
   1: {
   2:   "appId": "com.example.app",
   3:   "appName": "MyApp",
   4:   "webDir": "www"
   5: }
   6: 
```

---

## 📋 package.json

**Path:** `WebToApk/package.json`

```json
   1: {
   2:   "name": "webtoapk",
   3:   "version": "1.0.0",
   4:   "description": "",
   5:   "main": "index.js",
   6:   "scripts": {
   7:     "build": "echo 'No build needed for simple HTML'",
   8:     "test": "echo \"Error: no test specified\" && exit 1"
   9:   },
  10:   "keywords": [],
  11:   "author": "",
  12:   "license": "ISC",
  13:   "type": "commonjs",
  14:    "dependencies": {
  15:     "@capacitor/android": "^8.0.2",
  16:     "@capacitor/cli": "^8.0.2",
  17:     "@capacitor/core": "^8.0.2"
  18:   }
  19: }
  20: 
```

---

## 📁 www (WebToApk)

**Path:** `WebToApk/www`


### 🌐 index.html

**Path:** `WebToApk/www/index.html`

```html
   1: <html><body><h1>Hello World App!</h1></body></html>
   2: 
```

---

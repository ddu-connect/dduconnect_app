## Debuging

### App version related issues

If you are getting error such as:
```
Error: APK specifies a version code that has already been used.
```
Then change `versionName` in [./android/app/build.gradle](./android/app/build.gradle) file
```
android {
    defaultConfig {
        applicationId "com.dduconnect.dduconnect"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 110             // change this
        versionName "1.1.0"         // change this
    }
}
```


### Generate signed apk from aab
```
bundletool build-apks --bundle=app-release.aab --output=converted_zip.apks --mode=universal --overwrite \
    --ks=../../../../release.keystore \
    --ks-pass=pass:$STORE_PASSWORD \
    --ks-key-alias=$KEY_ALIAS \
    --key-pass=pass:$KEY_PASSWORD

unzip -p converted_zip.apks universal.apk > final_universal.apk
```

### Verifying Signature of APK and Keystore file
```
keytool -printcert -jarfile app-release.apk

keytool -list -v -keystore keyStore.jks -alias $KEY_ALIAS
```
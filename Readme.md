## Debuging

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
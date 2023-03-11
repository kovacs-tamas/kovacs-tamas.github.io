cp -R build/static docs/static
cp -R build/index.html docs/index.html

# echo 'var ePortrait = (function (ePortraitContainer, customParams) { ' >> eportrait.sdk.min.js
# echo "console.log('ePortrait SDK #${parts[$len]} is running');" >> eportrait.sdk.min.js
# sed -i '' -e 's/\"APP_CONTAINER_WILL_BE_REPLACED_WITH_VARIABLE\"/ePortraitContainer/g'  static/js/app.eportrait-sdk.js
# sed -i '' -e 's/\"#APP_CONTAINER_WILL_BE_REPLACED_WITH_VARIABLE\"/\"#" + ePortraitContainer/g'  static/js/app.eportrait-sdk.js
# sed -i '' -e 's/static\/media/images/g' static/js/app.eportrait-sdk.js
# sed -i '' -e "s/\"PUBLIC_PATH_WILL_BE_REPLACED_WITH_VARIABLE\/\"/customParams.publicPath/g"   static/js/app.eportrait-sdk.js
# sed -i '' -e "s/\"PUBLIC_PATH_WILL_BE_REPLACED_WITH_VARIABLE/customParams.publicPath\+\"/g"   static/js/app.eportrait-sdk.js
# cat static/js/app.eportrait-sdk.js >> eportrait.sdk.min.js
# echo "});" >> eportrait.sdk.min.js

# mv static/css/main.*.css eportrait.sdk.min.css
# sed -i '' -e 's/PUBLIC_PATH_WILL_BE_REPLACED_WITH_VARIABLE\/static\/media/images/g' eportrait.sdk.min.css

# mv static/media ./images

# rm -rf  static eportrait.sdk.min.csse asset-manifest.json favicon.ico logo192.png logo512.png manifest.json robots.txt index.html

# cd ..

# echo "* Dist folder"
# cp -R build/ ../dist/build

# echo "* Web demo app"
# cp -R build/ ../demo_app/assets/sdk/

# rm -rf build

# echo "* Copy the configutration"
# cp -R src/docs/eportrait_sdk_config.json ../dist/docs/eportrait_sdk_config.json

# echo "======================================================================="
# echo "Build process is done. DON'T FORGET TO COPY THE UPDATED DOCUMENTATION!"
# echo "======================================================================="

echo "HEY"
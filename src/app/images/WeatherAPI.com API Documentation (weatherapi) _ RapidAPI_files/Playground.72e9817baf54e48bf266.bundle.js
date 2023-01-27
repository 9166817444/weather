(()=>{var e,t,a,n={40769:(e,t,a)=>{"use strict";var n=a(85300),i=a(67294),r=a(73935),o=a(67165),s=a(27923),l=a(24975),d=a(24531),c=a(67227);const p={},u=(0,i.createContext)({context:p}),m=({children:e})=>{const[t,a]=(0,i.useState)(p),n=(0,i.useCallback)((e=>a((t=>({...t,...e})))),[a]);return i.createElement(u.Provider,{value:{context:{...t},setContext:n}},e)};var g=a(28592),v=a(64316);const h=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},k=[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityCoreFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Entity"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}],f=[{kind:"FragmentDefinition",name:{kind:"Name",value:"ApiVersionTargetUrls"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiVersion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"targetGroup"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"targetUrls"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],b=[{kind:"FragmentDefinition",name:{kind:"Name",value:"projectAllowedAPIsFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProjectAllowedAPI"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"projectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apiId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"api"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slugifiedName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"apiVersionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}}],y={kind:"Document",definitions:h([{kind:"FragmentDefinition",name:{kind:"Name",value:"ProjectFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Project"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mashapeId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"favorite"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"xMashapeKey"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"enableLimitsToAPIs"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"projectAllowedAPIs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"projectAllowedAPIsFields"},directives:[]}]}}]}}].concat(b)),loc:{start:0,end:207,source:{body:"\n  fragment ProjectFields on Project {\n    id\n    name\n    mashapeId\n    thumbnail\n    favorite\n    xMashapeKey\n    enableLimitsToAPIs\n    projectAllowedAPIs {\n      ...projectAllowedAPIsFields\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},_=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},w={kind:"Document",definitions:_([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getActiveUserAndContext"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"activeUser"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserCoreFields"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"getActiveUserContext"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ContextEntityFields"},directives:[]}]}}]}}].concat([{kind:"FragmentDefinition",name:{kind:"Name",value:"ContextEntityFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContextEntity"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"context"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"token"},arguments:[],directives:[]}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserCoreFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mashapeId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}])),loc:{start:0,end:133,source:{body:"\nquery getActiveUserAndContext{\n  activeUser {\n    ...UserCoreFields\n  }\n  getActiveUserContext {\n    ...ContextEntityFields\n  }\n}\n\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function x(e){var t;return null===(t=(0,c.bS)()[e])||void 0===t?void 0:t.value}const E=e=>{const t=(0,c.qt)();return t[`${e}-${t.locale||"en-US"}`]||t[e]},A=(e,t="")=>`${t}/static-assets/${(0,c.qt)().BRAND||"default"}/${e}`,N=(e,t)=>{if(e)return null;let a={kind:"user",domain:window.location.origin};if(t){const{id:e,name:n,email:i}=t;a={...a,key:e,name:n,email:i}}else a={...a,key:"anonymous-playground-user",anonymous:!0};return a},I=({children:e})=>{const{loading:t,data:a}=(0,v.a)(w),n={clientSideID:E("LAUNCH_DARKLY_CLIENT_KEY"),options:{privateAttributes:["email","name"]},context:N(t,null==a?void 0:a.activeUser),deferInitialization:!0},r=(0,g.withLDProvider)(n)((()=>i.createElement(i.Fragment,null,e)));return i.createElement(r,null)},S=(0,i.createContext)({selectedVersion:{}}),P=({children:e})=>{const[t,a]=(0,i.useState)({}),n=(0,i.useCallback)((e=>a((t=>({...t,...e})))),[a]);return i.createElement(S.Provider,{value:{selectedVersion:t,setSelectedVersion:n}},e)},F=JSON.parse('{"add-new-app":"新しいアプリを追加","add_new_app_for_version":"このバージョンの新しいアプリを追加","app-name":"アプリ名","authenticate":"認証","body":"ボディ","cancel":"キャンセル","cancel_button_text":"キャンセル","cancel_version_change":"バージョン変更をキャンセル","client-id-required":"顧客IDが必要です","client-secret-required":"顧客秘密情報が必要です","close":"閉じる","code-snippets":"コードスニペット","collapse-all":"すべて折りたたむ","connect_app_to_version_alert":"API バージョン<strong> {versionName} </strong>はアプリ \\" <strong> {appName} </strong> \\" に接続されていません","connect_app_to_version_failed_notification":"アプリ<strong> {appName} </strong> <strong> {versionName} </strong>に接続できませんでした","connect_app_to_version_notification":"アプリ<strong> {appName} </strong>はバージョン<strong> {versionName} </strong>","connect_to_current_version":"現在のアプリに接続","contact_api_provider":"APIプロバイダへ 連絡","copied-to-clipboard":"クリップボードにコピーしました","copy":"コピー","copy-code":"コードのコピー","create_new_app_message":"API バージョン<strong> {versionName} </strong>は新しいアプリに接続されます","current":"現在の","default":"ディフォルト","deprecated":"非推奨","description":"解説","discussions_question_title":"質問内容を 入力して ください。","do-not-include-in-request":"リクエストに入れてはいけません","download":"ダウンロード","download-api-spec":"APIスペックをダウンロード","download-api-spec-failed":"APIスペックのダウンロードに失敗しました","download-api-spec-failed-not-authorized":"このAPI仕様をダウンロードする権限がありません","download-api-spec-failed-not-found":"API仕様が見つかりません","download-current-spec":"現在の仕様","download-original-spec":"オリジナルスペック","download_asset_failed":"「 {assetName} 」アセットをダウンロードできませんでした","empty-response-result-message":"エンドポイントがテストされると、結果が表示されます。","endpoints-restricted-for-subscription":"サブスクライブした料金プランはこのエンドポイントへのアクセスを許可されていません。プランをアップグレードするか<a>APIプロバイダにコンタクト</a>してください。","enter-app-name":"アプリ名を入力","enter-app-name-error":"アプリ名の長さを３文字以上にしてください！","example":"例","example-response":"返信例","example-responses":"返信例","expand-all":"すべて展開","files":"ファイル","form-field-geo-pattern":"{name} はGEOポイントパターンに合致しなければなりません。例 (0,0)","form-field-required":"{name} が必要です","general-error-boundary-message":"何かがうまくいかなかった、私たちはそれを知っていて、これを迅速に修正しようとしています","general-error-message":"問題が発生しました","get-token":"Tokenを取得","get-user-apps-failed":"ユーザーのアプリの取得に失敗しました","get_help":"ヘルプ","gql-query":"GQLクエリ","header-parameters":"ヘッダのパラメータ","headers":"ヘッダ","http-headers":"HTTPヘッダ","install-sdk":"({parent}) {library}にSDKをインストール","install-sdk-button":"SDKのインストール","invalid-response-object":"応答は有効なJSONオブジェクトである必要があります","invalid-response-object-parsing-error":"応答の解析に失敗しました","latest":"最新","media-types":"メディアタイプ","message_failed":"メッセージ送信中に エラーが 発生しました","message_sent_to_provider":"メッセージを 送信しました!","mock-response-header-notification":"このエンドポイントは模擬応答を返すように設定されています。","more-details":"さらに詳細","my-apps":"開発者ボード","need_to_login_title":"RapidAPIにログインする必要があります","need_to_subscribe_title":"APIにサブスクライブする必要があります","new":"新しい","no-example-response":"このエンドポイントには参考返信はありません。","no-user-default-key":"サインアップキー","ok_button_text":"送信","one-version-header-notification":"アプリには１つのバージョンのみがリンクされます。テストを続けるには、新規にアプリを作成し、異なるアプリを選択するか<myAppLink>{myApps}</myAppLink>で更新します。","optional-parameters":"オプションパラメータ","password-required":"パスワードが必要です","path_to_variable":"変数へのパス","post_new_discussion":"ディスカッションを 投稿","question_body":"質問内容を入力","report_issue_to_rapidapi":"Rakuten RapidAPIへ 問題を 報告","request-body":"ボディのリクエスト","required-parameters":"必須パラメータ","results":"結果","run-on-repl-it":"repl.itでコードを実行","save":"保存","schema":"スキーマ","search-endpoints":"エンドポイントの検索","search_api_specs":"API仕様を検索する","select-example":"例の選択","select_file":"ファイルを選ぶ","status-codes":"ステータスコード","subscribe_to_test":"登録してテスト","test_endpoint":"テスト","try_again":"再試行","update_asset_error":"アセットを更新できませんでした","username-required":"ユーザ名が必要です","variables":"変数","version-test_label":"バージョンを選択してください","version-test_tooltip":"APIの最新されたバージョンが表示されています","visible":"見える","whitelist-api":"APIを許可","whitelist-api-header-notification":"選択したアプリはAPIへのコールに許可が必要です。このAPIを下にあるボタンを使い許可済みリストに追加または開発者ボードのアプリの設定で設定してください。","whitelist-app-access":"アプリアクセス"}'),C={"en-US":{code:"en-US",translations:JSON.parse('{"add-new-app":"Add new App","add_new_app_for_version":"Add new App for this version","app-name":"App Name","authenticate":"Authenticate","body":"Body","cancel":"cancel","cancel_button_text":"Cancel","cancel_version_change":"Cancel version change","client-id-required":"Client ID is required","client-secret-required":"Client Secret is required","close":"Close","code-snippets":"Code Snippets","collapse-all":"Collapse All","connect_app_to_version_alert":"API version <strong>{versionName}</strong> is not connected to App \\"<strong>{appName}</strong>\\"","connect_app_to_version_failed_notification":"Your App <strong>{appName}</strong> failed to connect to the version <strong>{versionName}</strong>","connect_app_to_version_notification":"Your App <strong>{appName}</strong> is now using version <strong>{versionName}</strong>","connect_to_current_version":"Connect to current App","contact_api_provider":"Contact API Provider","copied-to-clipboard":"Copied to clipboard","copy":"Copy","copy-code":"Copy Code","create_new_app_message":"API version <strong>{versionName}</strong> will be connected to a new app","current":"current","default":"default","deprecated":"deprecated","description":"Description","discussions_question_title":"Hi {developer}, feel free to ask your question:","do-not-include-in-request":"Do not include in request","download":"Download","download-api-spec":"Download API Spec","download-api-spec-failed":"Download API Spec Failed","download-api-spec-failed-not-authorized":"You Are Not Authorized To Download This API Spec","download-api-spec-failed-not-found":"API Spec Not Found","download-current-spec":"Current spec","download-original-spec":"Original spec","download_asset_failed":"Failed to download \\"{assetName}\\" asset","empty-response-result-message":"Results are displayed when an endpoint is tested.","endpoints-restricted-for-subscription":"The plan you are subscribed to does not allow access to this endpoint. please upgrade your plan or <a>Contact API Provider</a>.","enter-app-name":"Enter app name","enter-app-name-error":"Please input app name that has at least 3 characters!","example":"Example","example-response":"Example Response","example-responses":"Example Responses","expand-all":"Expand All","files":"Files","form-field-geo-pattern":"{name} must match a geo point pattern. i.e (0,0)","form-field-required":"{name} is required","general-error-boundary-message":"Something Went Wrong, We know it and trying to fix this Rapidly","general-error-message":"Something Went Wrong","get-token":"Get Token","get-user-apps-failed":"Get User\'s Apps Failed","get_help":"Get Help","gql-query":"GQL Query","header-parameters":"Header Parameters","headers":"Headers","http-headers":"HTTP Headers","install-sdk":"Install SDK for ({parent}) {library}","install-sdk-button":"Install SDK","invalid-response-object":"The Response must be a valid JSON object","invalid-response-object-parsing-error":"Failed to parse the response","latest":"latest","media-types":"Media Types","message_failed":"Message failed. Please try again later.","message_sent_to_provider":"Message sent! The API provider will be in touch soon.","mock-response-header-notification":"This endpoint is configured to return a mock response.","more-details":"More Details","my-apps":"My Apps","need_to_login_title":"You need to login to RapidAPI","need_to_subscribe_title":"You need to subscribe to the API","new":"New","no-description":"No description","no-example-response":"There\'s no example response for this endpoint","no-user-default-key":"SIGN-UP-FOR-KEY","ok_button_text":"Send","one-version-header-notification":"Only one version can be linked to an App. To continue testing, create a new app, choose a different app or update the version in <myAppLink>{myApps}</myAppLink>","optional-parameters":"Optional Parameters","password-required":"Password is required","path_to_variable":"Path to variable","post_new_discussion":"Post new discussion","question_body":"Question Body","report_issue_to_rapidapi":"Report issue to RapidAPI","request-body":"Request Body","required-parameters":"Required Parameters","results":"Results","run-on-repl-it":"run code on repl.it","save":"save","schema":"Schema","search-endpoints":"Search endpoints","search_api_specs":"search for API specs","select-example":"Select an example","select_file":"Select File","status-codes":"Status Codes","subscribe_to_test":"Subscribe to Test","test_endpoint":"Test Endpoint","try_again":"Try again","update_asset_error":"Failed to update asset","username-required":"Username is required","variables":"Variables","version-test_label":"Select a version","version-test_tooltip":"You are viewing a newer API Version","visible":"Visible","whitelist-api":"Allow API","whitelist-api-header-notification":"Your selected App requires permissions to make calls to the API. Please add this API to the allowed list using the \'Allow API\' button, or the App\'s configuration settings in your Developer Dashboard.","whitelist-app-access":"App Access"}')},ja:{code:"ja",translations:F},de:{code:"de",translations:JSON.parse('{"add-new-app":"Neue App hinzufügen","add_new_app_for_version":"Neue App für diese Version hinzufügen","app-name":"App Name","authenticate":"Authentifizieren","body":"Körper","cancel":"stornieren","cancel_button_text":"Stornieren","cancel_version_change":"Versionswechsel abbrechen","client-id-required":"Client-ID ist erforderlich","client-secret-required":"Client-Geheimnis ist erforderlich","close":"Schließen","code-snippets":"Code Ausschnitte","collapse-all":"Alle reduzieren","connect_app_to_version_alert":"API-Version <strong> {versionName} </strong> ist nicht mit App \\" <strong> {appName} </strong> \\" verbunden","connect_app_to_version_failed_notification":"Ihre App <strong> {appName} </strong> keine Verbindung zur Version <strong> {versionName} </strong>","connect_app_to_version_notification":"Ihre App <strong> {appName} </strong> jetzt die Version <strong> {versionName} </strong>","connect_to_current_version":"Mit aktueller App verbinden","contact_api_provider":"API-Anbieter kontaktieren","copied-to-clipboard":"In die Zwischenablage kopiert","copy":"Kopieren","copy-code":"Code kopieren","create_new_app_message":"API-Version <strong> {versionName} </strong> wird mit der neuen App verbunden","current":"Strom","default":"Ursprünglich","deprecated":"veraltet","description":"Beschreibung","discussions_question_title":"Hallo {developer} , stellen Sie gerne Ihre Frage:","do-not-include-in-request":"Nicht in Anfrage aufnehmen","download":"Download","download-api-spec":"API-Spezifikation herunterladen","download-api-spec-failed":"Download der API-Spezifikation fehlgeschlagen","download-api-spec-failed-not-authorized":"Sie sind nicht berechtigt, diese API-Spezifikation herunterzuladen","download-api-spec-failed-not-found":"API-Spezifikation nicht gefunden","download-current-spec":"Aktuelle Spezifikation","download-original-spec":"Originalspezifikation","download_asset_failed":"Asset „ {assetName} “ konnte nicht heruntergeladen werden","empty-response-result-message":"Die Ergebnisse werden angezeigt, wenn ein Endpunkt getestet wird.","endpoints-restricted-for-subscription":"Der von Ihnen abonnierte Plan lässt keinen Zugriff auf diesen Endpunkt zu. Bitte aktualisieren Sie Ihren Plan oder <a> wenden Sie sich an den API-Anbieter </a> .","enter-app-name":"App-Namen eingeben","enter-app-name-error":"Bitte geben Sie einen App-Namen mit mindestens 3 Zeichen ein!","example":"Beispiel","example-response":"Beispielantwort","example-responses":"Beispielantworten","expand-all":"Alle erweitern","files":"Dateien","form-field-geo-pattern":"{name} muss einem geografischen Punktmuster entsprechen. dh (0,0)","form-field-required":"{name} ist erforderlich","general-error-boundary-message":"Etwas ist schief gelaufen, wir wissen es und versuchen, dies schnell zu beheben","general-error-message":"Etwas ist schief gelaufen","get-token":"Bekomme Token","get-user-apps-failed":"Abrufen der Benutzer-Apps fehlgeschlagen","get_help":"Hilfe erhalten","gql-query":"GQL-Abfrage","header-parameters":"Kopfzeilenparameter","headers":"Überschriften","http-headers":"HTTP-Header","install-sdk":"SDK installieren für ( {parent} ) {library}","install-sdk-button":"SDK installieren","invalid-response-object":"Die Antwort muss ein gültiges JSON-Objekt sein","invalid-response-object-parsing-error":"Die Antwort konnte nicht geparst werden","latest":"neueste","media-types":"Medientypen","message_failed":"Nachricht fehlgeschlagen. Bitte versuchen Sie es später erneut.","message_sent_to_provider":"Nachricht gesendet! Der API-Anbieter wird sich in Kürze mit Ihnen in Verbindung setzen.","mock-response-header-notification":"Dieser Endpunkt ist so konfiguriert, dass er eine Scheinantwort zurückgibt.","more-details":"Mehr Details","my-apps":"Meine Applikationen","need_to_login_title":"Sie müssen sich bei RapidAPI anmelden","need_to_subscribe_title":"Sie müssen die API abonnieren","new":"Neu","no-example-response":"Es gibt keine Beispielantwort für diesen Endpunkt","no-user-default-key":"ANMELDUNG-FÜR-SCHLÜSSEL","ok_button_text":"Senden","one-version-header-notification":"Es kann nur eine Version mit einer App verknüpft werden. Um mit dem Testen fortzufahren, erstellen Sie eine neue App, wählen Sie eine andere App aus oder aktualisieren Sie die Version in <myAppLink> {myApps} </myAppLink>","optional-parameters":"Optionale Parameter","password-required":"Passwort wird benötigt","path_to_variable":"Pfad zur Variablen","post_new_discussion":"Neue Diskussion posten","question_body":"Fragetext","report_issue_to_rapidapi":"Problem an RapidAPI melden","request-body":"Anfragekörper","required-parameters":"Erforderliche Parameter","results":"Ergebnisse","run-on-repl-it":"Code auf repl.it ausführen","save":"speichern","schema":"Schema","search-endpoints":"Endpunkte suchen","search_api_specs":"Suche nach API-Spezifikationen","select-example":"Wählen Sie ein Beispiel aus","select_file":"Datei aussuchen","status-codes":"Statuscodes","subscribe_to_test":"Test abonnieren","test_endpoint":"Endpunkt testen","try_again":"Versuchen Sie es nochmal","update_asset_error":"Asset konnte nicht aktualisiert werden","username-required":"Ein Benutzername wird benötigt","variables":"Variablen","version-test_label":"Wähle eine Version","version-test_tooltip":"Sie sehen eine neuere API-Version","visible":"Sichtbar","whitelist-api":"API zulassen","whitelist-api-header-notification":"Ihre ausgewählte App erfordert Berechtigungen, um Aufrufe an die API zu tätigen. Bitte fügen Sie diese API über die Schaltfläche \\"API zulassen\\" oder die Konfigurationseinstellungen der App in Ihrem Entwickler-Dashboard zur Liste der zugelassenen hinzu.","whitelist-app-access":"App-Zugriff"}')},es:{code:"es",translations:JSON.parse('{"add-new-app":"Agregar nueva aplicación","add_new_app_for_version":"Agregar nueva aplicación para esta versión","app-name":"Nombre de la aplicación","authenticate":"Autenticar","body":"Cuerpo","cancel":"cancelar","cancel_button_text":"Cancelar","cancel_version_change":"Cancelar cambio de versión","client-id-required":"Se requiere identificación de cliente","client-secret-required":"Se requiere el secreto del cliente","close":"Cerca","code-snippets":"Fragmentos de código","collapse-all":"Desplegar todo","connect_app_to_version_alert":"La versión de API <strong> {versionName} </strong> no está conectada a la aplicación \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"Tu aplicación <strong> {appName} </strong> no pudo conectarse a la versión <strong> {versionName} </strong>","connect_app_to_version_notification":"Su aplicación <strong> {appName} </strong> ahora usa la versión <strong> {versionName} </strong>","connect_to_current_version":"Conectarse a la aplicación actual","contact_api_provider":"Comuníquese con el proveedor de API","copied-to-clipboard":"Copiado al portapapeles","copy":"Copiar","copy-code":"Copiar código","create_new_app_message":"La versión de API <strong> {versionName} </strong> se conectará a la nueva aplicación","current":"Actual","default":"defecto","deprecated":"obsoleto","description":"Descripción","discussions_question_title":"Hola, {developer} , no dudes en hacer tu pregunta:","do-not-include-in-request":"No incluir en la solicitud","download":"Descargar","download-api-spec":"Descargar especificaciones de API","download-api-spec-failed":"Error al descargar la especificación de la API","download-api-spec-failed-not-authorized":"No está autorizado para descargar esta especificación de API","download-api-spec-failed-not-found":"No se ha encontrado la especificación de API","download-current-spec":"Especificación actual","download-original-spec":"Especificaciones originales","download_asset_failed":"Error al descargar el elemento \\" {assetName} \\"","empty-response-result-message":"Los resultados se muestran cuando se prueba un punto final.","endpoints-restricted-for-subscription":"El plan al que está suscrito no permite el acceso a este punto final. actualice su plan o <a> Comuníquese con el proveedor de API </a> .","enter-app-name":"Ingrese el nombre de la aplicación","enter-app-name-error":"Introduzca el nombre de la aplicación que tenga al menos 3 caracteres.","example":"Ejemplo","example-response":"Respuesta de ejemplo","example-responses":"Respuestas de ejemplo","expand-all":"Expandir todo","files":"archivos","form-field-geo-pattern":"{name} debe coincidir con un patrón de puntos geográficos. es decir (0,0)","form-field-required":"{name} es obligatorio","general-error-boundary-message":"Algo salió mal, lo sabemos y estamos tratando de solucionarlo rápidamente","general-error-message":"Algo salió mal","get-token":"Obtener Token","get-user-apps-failed":"Error al obtener las aplicaciones del usuario","get_help":"Consigue ayuda","gql-query":"Consulta GQL","header-parameters":"Parámetros de encabezado","headers":"Encabezados","http-headers":"Encabezados HTTP","install-sdk":"Instalar SDK para ( {parent} ) {library}","install-sdk-button":"Instalar SDK","invalid-response-object":"La respuesta debe ser un objeto JSON válido","invalid-response-object-parsing-error":"No se pudo analizar la respuesta","latest":"más reciente","media-types":"Tipos de medios","message_failed":"Mensaje fallido. Por favor, inténtelo de nuevo más tarde.","message_sent_to_provider":"¡Mensaje enviado! El proveedor de API se pondrá en contacto pronto.","mock-response-header-notification":"Este punto final está configurado para devolver una respuesta simulada.","more-details":"Más detalles","my-apps":"Mis aplicaciones","need_to_login_title":"Necesita iniciar sesión en RapidAPI","need_to_subscribe_title":"Necesitas suscribirte a la API","new":"Nuevo","no-example-response":"No hay una respuesta de ejemplo para este punto final.","no-user-default-key":"REGISTRO PARA LLAVE","ok_button_text":"Enviar","one-version-header-notification":"Solo se puede vincular una versión a una aplicación. Para continuar con la prueba, cree una nueva aplicación, elija una aplicación diferente o actualice la versión en <myAppLink> {myApps} </myAppLink>","optional-parameters":"Parámetros opcionales","password-required":"se requiere contraseña","path_to_variable":"Ruta a la variable","post_new_discussion":"Publicar una nueva discusión","question_body":"Cuerpo de la pregunta","report_issue_to_rapidapi":"Informar del problema a RapidAPI","request-body":"Cuerpo de solicitud","required-parameters":"Parámetros requeridos","results":"Resultados","run-on-repl-it":"ejecutar código en repl.it","save":"ahorrar","schema":"Esquema","search-endpoints":"Puntos finales de búsqueda","search_api_specs":"buscar especificaciones de API","select-example":"Seleccione un ejemplo","select_file":"Seleccione Archivo","status-codes":"Códigos de estado","subscribe_to_test":"Suscríbete a la prueba","test_endpoint":"Punto final de prueba","try_again":"Intentar otra vez","update_asset_error":"No se pudo actualizar el activo","username-required":"Se requiere nombre de usuario","variables":"Variables","version-test_label":"Seleccione una versión","version-test_tooltip":"Estás viendo una versión de API más reciente","visible":"Visible","whitelist-api":"Permitir API","whitelist-api-header-notification":"La aplicación seleccionada requiere permisos para realizar llamadas a la API. Agregue esta API a la lista de permitidos usando el botón \'Permitir API\', o la configuración de la aplicación en su Panel de Desarrollador.","whitelist-app-access":"Acceso a la aplicación"}')},fr:{code:"fr",translations:JSON.parse('{"add-new-app":"Ajouter une nouvelle application","add_new_app_for_version":"Ajouter une nouvelle application pour cette version","app-name":"Nom de l\'application","authenticate":"Authentifier","body":"Corps","cancel":"Annuler","cancel_button_text":"Annuler","cancel_version_change":"Annuler le changement de version","client-id-required":"L\'identifiant client est requis","client-secret-required":"Le secret client est requis","close":"Fermer","code-snippets":"Extraits de code","collapse-all":"Réduire tout","connect_app_to_version_alert":"La version d\'API <strong> {versionName} </strong> n\'est pas connectée à l\'application \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"Votre application <strong> {appName} </strong> n\'a pas réussi à se connecter à la version <strong> {versionName} </strong>","connect_app_to_version_notification":"Votre application <strong> {appName} </strong> utilise désormais la version <strong> {versionName} </strong>","connect_to_current_version":"Se connecter à l\'application actuelle","contact_api_provider":"Contacter le fournisseur d\'API","copied-to-clipboard":"Copié dans le presse-papier","copy":"Copie","copy-code":"Copier le code","create_new_app_message":"La version d\'API <strong> {versionName} </strong> sera connectée à la nouvelle application","current":"actuel","default":"défaut","deprecated":"obsolète","description":"La description","discussions_question_title":"Salut {developer} , n\'hésitez pas à poser votre question :","do-not-include-in-request":"Ne pas inclure dans la demande","download":"Télécharger","download-api-spec":"Télécharger les spécifications de l\'API","download-api-spec-failed":"Échec du téléchargement des spécifications de l\'API","download-api-spec-failed-not-authorized":"Vous n\'êtes pas autorisé à télécharger cette spécification d\'API","download-api-spec-failed-not-found":"Spécification API introuvable","download-current-spec":"Spécification actuelle","download-original-spec":"Spécification d\'origine","download_asset_failed":"Échec du téléchargement de l\'actif \\" {assetName} \\"","empty-response-result-message":"Les résultats sont affichés lorsqu\'un point de terminaison est testé.","endpoints-restricted-for-subscription":"Le forfait auquel vous êtes abonné n\'autorise pas l\'accès à ce point de terminaison. veuillez mettre à niveau votre plan ou <a> Contacter le fournisseur d\'API </a> .","enter-app-name":"Saisissez le nom de l\'application","enter-app-name-error":"Veuillez saisir un nom d\'application comportant au moins 3 caractères !","example":"Exemple","example-response":"Exemple de réponse","example-responses":"Exemples de réponses","expand-all":"Développer tout","files":"Des dossiers","form-field-geo-pattern":"{name} doit correspondre à un modèle de point géographique. c\'est-à-dire (0,0)","form-field-required":"{name} est requis","general-error-boundary-message":"Quelque chose s\'est mal passé, nous le savons et essayons de résoudre ce problème rapidement","general-error-message":"Quelque chose s\'est mal passé","get-token":"Obtenir un jeton","get-user-apps-failed":"Échec de l\'obtention des applications de l\'utilisateur","get_help":"Obtenir de l\'aide","gql-query":"Requête GQL","header-parameters":"Paramètres d\'en-tête","headers":"En-têtes","http-headers":"En-têtes HTTP","install-sdk":"Installer le SDK pour ( {parent} ) {library}","install-sdk-button":"Installer le SDK","invalid-response-object":"La réponse doit être un objet JSON valide","invalid-response-object-parsing-error":"Échec de l\'analyse de la réponse","latest":"dernier","media-types":"Types de médias","message_failed":"Échec du message. Veuillez réessayer plus tard.","message_sent_to_provider":"Message envoyé! Le fournisseur de l\'API vous contactera bientôt.","mock-response-header-notification":"Ce point de terminaison est configuré pour renvoyer une réponse fictive.","more-details":"Plus de détails","my-apps":"Mes applications","need_to_login_title":"Vous devez vous connecter à RapidAPI","need_to_subscribe_title":"Vous devez vous abonner à l\'API","new":"Nouveau","no-example-response":"Il n\'y a pas d\'exemple de réponse pour ce point de terminaison","no-user-default-key":"INSCRIVEZ-VOUS À LA CLÉ","ok_button_text":"Envoyer","one-version-header-notification":"Une seule version peut être liée à une App. Pour continuer les tests, créez une nouvelle application, choisissez une autre application ou mettez à jour la version dans <myAppLink> {myApps} </myAppLink>","optional-parameters":"Paramètres facultatifs","password-required":"Mot de passe requis","path_to_variable":"Chemin d\'accès à la variable","post_new_discussion":"Publier une nouvelle discussion","question_body":"Corps de la question","report_issue_to_rapidapi":"Signaler le problème à RapidAPI","request-body":"Corps de la demande","required-parameters":"Paramètres requis","results":"Résultats","run-on-repl-it":"exécuter le code sur repl.it","save":"sauvegarder","schema":"Schéma","search-endpoints":"Rechercher des points de terminaison","search_api_specs":"rechercher les spécifications de l\'API","select-example":"Sélectionnez un exemple","select_file":"Choisir le dossier","status-codes":"Codes d\'état","subscribe_to_test":"Abonnez-vous pour tester","test_endpoint":"Point de terminaison de test","try_again":"Réessayer","update_asset_error":"Échec de la mise à jour de l\'élément","username-required":"Nom d\'utilisateur est nécessaire","variables":"variables","version-test_label":"Sélectionnez une version","version-test_tooltip":"Vous consultez une version plus récente de l\'API","visible":"Visible","whitelist-api":"Autoriser l\'API","whitelist-api-header-notification":"Votre application sélectionnée nécessite des autorisations pour passer des appels à l\'API. Veuillez ajouter cette API à la liste autorisée à l\'aide du bouton « Autoriser l\'API » ou des paramètres de configuration de l\'application dans votre tableau de bord du développeur.","whitelist-app-access":"Accès à l\'application"}')},he:{code:"he",translations:JSON.parse('{"add-new-app":"הוסף אפליקציה חדשה","add_new_app_for_version":"הוסף אפליקציה חדשה עבור גרסה זו","app-name":"שם האפליקציה","authenticate":"לְאַמֵת","body":"גוּף","cancel":"לְבַטֵל","cancel_button_text":"לְבַטֵל","cancel_version_change":"בטל את שינוי הגרסה","client-id-required":"נדרש זיהוי לקוח","client-secret-required":"נדרש סוד לקוח","close":"סגור","code-snippets":"קטעי קוד","collapse-all":"למוטט הכל","connect_app_to_version_alert":"גרסת ה-API <strong> {versionName} </strong> אינה מחוברת לאפליקציה \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"האפליקציה שלך <strong> {appName} </strong> לא הצליחה להתחבר לגרסה <strong> {versionName} </strong>","connect_app_to_version_notification":"האפליקציה שלך <strong> {appName} </strong> משתמשת כעת בגרסה <strong> {versionName} </strong>","connect_to_current_version":"התחבר לאפליקציה הנוכחית","contact_api_provider":"פנה לספק API","copied-to-clipboard":"הועתק ללוח","copy":"עותק","copy-code":"העתק קוד","create_new_app_message":"גרסת ה-API <strong> {versionName} </strong> תחובר לאפליקציה חדשה","current":"נוֹכְחִי","default":"בְּרִירַת מֶחדָל","deprecated":"הוצא משימוש","description":"תיאור","discussions_question_title":"שלום {developer} , אל תהסס לשאול את שאלתך:","do-not-include-in-request":"אל תכלול בבקשה","download":"הורד","download-api-spec":"הורד מפרט API","download-api-spec-failed":"מפרט ה- API להורדה נכשל","download-api-spec-failed-not-authorized":"אינך מורשה להוריד מפרט API זה","download-api-spec-failed-not-found":"מפרט API לא נמצא","download-current-spec":"מפרט נוכחי","download-original-spec":"מפרט מקורי","download_asset_failed":"הורדת הנכס \\" {assetName} \\" נכשלה","empty-response-result-message":"התוצאות מוצגות כאשר נבדקת נקודת קצה.","endpoints-restricted-for-subscription":"התוכנית אליה אתה מנוי אינה מאפשרת גישה לנקודת קצה זו. שדרג את התוכנית שלך או <a> ספק API לתקשר </a> .","enter-app-name":"הזן את שם האפליקציה","enter-app-name-error":"הזן את שם האפליקציה המכיל לפחות 3 תווים!","example":"דוגמא","example-response":"תגובה לדוגמא","example-responses":"תגובות לדוגמא","expand-all":"הרחב הכל","files":"קבצים","form-field-geo-pattern":"{name} חייב להתאים לתבנית נקודה גיאוגרפית. כלומר (0,0)","form-field-required":"נדרש {name}","general-error-boundary-message":"משהו השתבש, אנחנו יודעים את זה ומנסים לתקן את זה במהירות","general-error-message":"משהו השתבש","get-token":"קבל אסימון","get-user-apps-failed":"הורדת האפליקציות של המשתמש נכשלה","get_help":"תקבל עזרה","gql-query":"שאילתת GQL","header-parameters":"פרמטרים לכותרת","headers":"כותרות","http-headers":"כותרות HTTP","install-sdk":"התקן SDK עבור ( {parent} ) {library}","install-sdk-button":"התקן SDK","invalid-response-object":"התגובה חייבת להיות אובייקט JSON חוקי","invalid-response-object-parsing-error":"הניתוח נכשל","latest":"הכי מאוחר","media-types":"סוגי מדיה","message_failed":"ההודעה נכשלה. בבקשה נסה שוב מאוחר יותר.","message_sent_to_provider":"הודעה נשלחה! ספק ה- API ייצור קשר בקרוב.","mock-response-header-notification":"נקודת קצה זו מוגדרת להחזיר תגובה מדומה.","more-details":"פרטים נוספים","my-apps":"האפליקציות שלי","need_to_login_title":"עליך להתחבר ל- RapidAPI","need_to_subscribe_title":"עליך להירשם כמנוי ל- API","new":"חָדָשׁ","no-example-response":"אין תגובה לדוגמה לנקודת קצה זו","no-user-default-key":"הרשמה למפתח","ok_button_text":"לִשְׁלוֹחַ","one-version-header-notification":"ניתן לקשר רק גרסה אחת לאפליקציה. להמשך הבדיקה, צור אפליקציה חדשה, בחר אפליקציה אחרת או עדכן את הגרסה ב- <myAppLink> {myApps} </myAppLink>","optional-parameters":"פרמטרים אופציונליים","password-required":"דרושה סיסמא","path_to_variable":"נתיב למשתנה","post_new_discussion":"פרסם דיון חדש","question_body":"גוף השאלה","report_issue_to_rapidapi":"דווח על הבעיה ל- RapidAPI","request-body":"גוף בקשה","required-parameters":"פרמטרים נדרשים","results":"תוצאות","run-on-repl-it":"הפעל קוד ב- repl.it","save":"לשמור","schema":"סכֵימָה","search-endpoints":"חפש נקודות קצה","search_api_specs":"חפש מפרט API","select-example":"בחר דוגמה","select_file":"בחר קובץ","status-codes":"קודי סטטוס","subscribe_to_test":"הירשם למבחן","test_endpoint":"בדיקת נקודת סיום","try_again":"נסה שוב","update_asset_error":"עדכון הנכס נכשל","username-required":"נדרש שם משתמש","variables":"משתנים","version-test_label":"בחר גרסה","version-test_tooltip":"אתה צופה בגרסת API חדשה יותר","visible":"גלוי","whitelist-api":"אפשר ממשק API","whitelist-api-header-notification":"האפליקציה שבחרת דורשת הרשאות לביצוע שיחות ל- API. אנא הוסף API זה לרשימה המותרת באמצעות כפתור \'אפשר API\', או הגדרות התצורה של האפליקציה במרכז השליטה למפתחים שלך.","whitelist-app-access":"גישה לאפליקציה"}')},hi:{code:"hi",translations:JSON.parse('{"add-new-app":"नया ऐप जोड़ें","add_new_app_for_version":"इस संस्करण के लिए नया ऐप जोड़ें","app-name":"एप्लिकेशन का नाम","authenticate":"प्रमाणित","body":"तन","cancel":"रद्द करना","cancel_button_text":"रद्द करना","cancel_version_change":"संस्करण परिवर्तन रद्द करें","client-id-required":"क्लाइंट आईडी आवश्यक है","client-secret-required":"क्लाइंट सीक्रेट आवश्यक है","close":"बंद करे","code-snippets":"कोड के टुकड़े","collapse-all":"सभी को संकुचित करें","connect_app_to_version_alert":"API संस्करण <strong> {versionName} </strong> ऐप \\" <strong> {appName} </strong> \\" से कनेक्ट नहीं है","connect_app_to_version_failed_notification":"आपका ऐप <strong> {appName} </strong> <strong> {versionName} </strong> से कनेक्ट होने में विफल रहा","connect_app_to_version_notification":"आपका ऐप <strong> {appName} </strong> अब संस्करण <strong> {versionName} </strong>","connect_to_current_version":"वर्तमान ऐप से कनेक्ट करें","contact_api_provider":"संपर्क एपीआई प्रदाता","copied-to-clipboard":"क्लिपबोर्ड पर नकल","copy":"प्रतिलिपि","copy-code":"कॉपी कोड","create_new_app_message":"एपीआई संस्करण <strong> {versionName} </strong> को नए ऐप से जोड़ा जाएगा","current":"वर्तमान","default":"चूक जाना","deprecated":"पदावनत","description":"विवरण","discussions_question_title":"नमस्ते {developer} , बेझिझक अपना प्रश्न पूछें:","do-not-include-in-request":"अनुरोध में शामिल न करें","download":"डाउनलोड","download-api-spec":"एपीआई युक्ति डाउनलोड करें","download-api-spec-failed":"डाउनलोड एपीआई युक्ति विफल","download-api-spec-failed-not-authorized":"आप इस एपीआई युक्ति को डाउनलोड करने के लिए अधिकृत नहीं हैं","download-api-spec-failed-not-found":"एपीआई युक्ति नहीं मिली","download-current-spec":"वर्तमान कल्पना","download-original-spec":"मूल कल्पना","download_asset_failed":"\\" {assetName} \\" एसेट डाउनलोड करने में विफल","empty-response-result-message":"एक समापन बिंदु का परीक्षण करने पर परिणाम प्रदर्शित होते हैं।","endpoints-restricted-for-subscription":"आपने जिस योजना की सदस्यता ली है, वह इस समापन बिंदु तक पहुंच की अनुमति नहीं देती है। कृपया अपनी योजना या <a> API प्रदाता से संपर्क करें </a> अपग्रेड करें।","enter-app-name":"ऐप का नाम दर्ज करें","enter-app-name-error":"कृपया ऐप का नाम इनपुट करें जिसमें कम से कम 3 वर्ण हों!","example":"उदाहरण","example-response":"उदाहरण प्रतिक्रिया","example-responses":"उदाहरण प्रतिक्रियाएं","expand-all":"सभी का विस्तार","files":"फ़ाइलें","form-field-geo-pattern":"{name} को भू-बिंदु पैटर्न से मेल खाना चाहिए। यानी (0,0)","form-field-required":"{name} आवश्यक है","general-error-boundary-message":"कुछ गलत हुआ, हम इसे जानते हैं और इसे तेजी से ठीक करने का प्रयास कर रहे हैं","general-error-message":"कुछ गलत हो गया","get-token":"टोकन प्राप्त करें","get-user-apps-failed":"उपयोगकर्ता के ऐप्स को विफल करें","get_help":"मदद लें","gql-query":"जीक्यूएल क्वेरी","header-parameters":"हैडर पैरामीटर्स","headers":"हेडर","http-headers":"HTTP शीर्षलेख","install-sdk":"{parent} ) {library} लिए SDK इंस्टॉल करें","install-sdk-button":"एसडीके स्थापित करें","invalid-response-object":"प्रतिक्रिया एक वैध JSON ऑब्जेक्ट होना चाहिए","invalid-response-object-parsing-error":"प्रतिक्रिया को पार्स करने में विफल","latest":"नवीनतम","media-types":"मीडिया प्रकार","message_failed":"संदेश विफल। बाद में पुन: प्रयास करें।","message_sent_to_provider":"संदेश भेजा गया! एपीआई प्रदाता जल्द ही संपर्क में रहेगा।","mock-response-header-notification":"यह समापन बिंदु एक नकली प्रतिक्रिया देने के लिए कॉन्फ़िगर किया गया है।","more-details":"अधिक जानकारी","my-apps":"मेरी एप्प्स","need_to_login_title":"आपको रैपिडएपीआई में लॉग इन करना होगा","need_to_subscribe_title":"आपको एपीआई की सदस्यता लेने की आवश्यकता है","new":"नया","no-example-response":"इस समापन बिंदु के लिए कोई उदाहरण प्रतिक्रिया नहीं है","no-user-default-key":"साइन-अप-फॉर-की","ok_button_text":"संदेश","one-version-header-notification":"किसी ऐप से केवल एक संस्करण को जोड़ा जा सकता है। परीक्षण जारी रखने के लिए, एक नया ऐप बनाएं, एक अलग ऐप चुनें या <myAppLink> {myApps} </myAppLink>","optional-parameters":"वैकल्पिक पैरामीटर","password-required":"पासवर्ड की आवश्यकता है","path_to_variable":"चर के लिए पथ","post_new_discussion":"नई चर्चा पोस्ट करें","question_body":"प्रश्न निकाय","report_issue_to_rapidapi":"रैपिडएपीआई को समस्या की रिपोर्ट करें","request-body":"अनुरोध निकाय","required-parameters":"आवश्यक पैरामीटर","results":"परिणाम","run-on-repl-it":"repl.it . पर कोड चलाएँ","save":"बचा ले","schema":"योजना","search-endpoints":"अंतिम बिंदु खोजें","search_api_specs":"एपीआई विनिर्देशों के लिए खोजें","select-example":"एक उदाहरण चुनें","select_file":"फ़ाइल का चयन करें","status-codes":"स्थिति कोड","subscribe_to_test":"परीक्षण के लिए सदस्यता लें","test_endpoint":"परीक्षण समापन बिंदु","try_again":"पुनः प्रयास करें","update_asset_error":"संपत्ति अपडेट करने में विफल","username-required":"उपयोगकर्ता नाम आवश्यक है","variables":"चर","version-test_label":"एक संस्करण चुनें","version-test_tooltip":"आप एक नया एपीआई संस्करण देख रहे हैं","visible":"दृश्यमान","whitelist-api":"एपीआई की अनुमति दें","whitelist-api-header-notification":"आपके चयनित ऐप को एपीआई को कॉल करने के लिए अनुमतियों की आवश्यकता है। कृपया \'एपीआई को अनुमति दें\' बटन, या अपने डेवलपर डैशबोर्ड में ऐप की कॉन्फ़िगरेशन सेटिंग्स का उपयोग करके इस एपीआई को अनुमत सूची में जोड़ें।","whitelist-app-access":"ऐप एक्सेस"}')},it:{code:"it",translations:JSON.parse('{"add-new-app":"Aggiungi nuova app","add_new_app_for_version":"Aggiungi nuova app per questa versione","app-name":"Nome dell\'applicazione","authenticate":"Autenticare","body":"Corpo","cancel":"Annulla","cancel_button_text":"Annulla","cancel_version_change":"Annulla la modifica della versione","client-id-required":"L\'ID cliente è richiesto","client-secret-required":"Il segreto del cliente è obbligatorio","close":"Vicino","code-snippets":"Frammenti di codice","collapse-all":"Comprimi tutto","connect_app_to_version_alert":"La versione API <strong> {versionName} </strong> non è collegata all\'app \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"La tua app <strong> {appName} </strong> non è riuscita a connettersi alla versione <strong> {versionName} </strong>","connect_app_to_version_notification":"La tua app <strong> {appName} </strong> ora utilizza la versione <strong> {versionName} </strong>","connect_to_current_version":"Connetti all\'app corrente","contact_api_provider":"Contatta il fornitore dell\'API","copied-to-clipboard":"Copiato negli appunti","copy":"copia","copy-code":"Copia codice","create_new_app_message":"La versione API <strong> {versionName} </strong> sarà collegata alla nuova app","current":"attuale","default":"predefinito","deprecated":"deprecato","description":"Descrizione","discussions_question_title":"Ciao {developer} , sentiti libero di fare la tua domanda:","do-not-include-in-request":"Non includere nella richiesta","download":"Scarica","download-api-spec":"Scarica le specifiche API","download-api-spec-failed":"Download delle specifiche API non riuscito","download-api-spec-failed-not-authorized":"Non sei autorizzato a scaricare questa specifica API","download-api-spec-failed-not-found":"Specifica API non trovata","download-current-spec":"Specifiche attuali","download-original-spec":"Specifiche originali","download_asset_failed":"Impossibile scaricare l\'asset \\" {assetName} \\"","empty-response-result-message":"I risultati vengono visualizzati quando viene testato un endpoint.","endpoints-restricted-for-subscription":"Il piano a cui sei abbonato non consente l\'accesso a questo endpoint. aggiorna il tuo piano o <a> Contatta il fornitore dell\'API </a> .","enter-app-name":"Inserisci il nome dell\'app","enter-app-name-error":"Inserisci il nome dell\'app che contenga almeno 3 caratteri!","example":"Esempio","example-response":"Esempio di risposta","example-responses":"Risposte di esempio","expand-all":"Espandi tutto","files":"File","form-field-geo-pattern":"{name} deve corrispondere a un modello di punti geografici. cioè (0,0)","form-field-required":"{name} è obbligatorio","general-error-boundary-message":"Qualcosa è andato storto, lo sappiamo e stiamo cercando di risolverlo rapidamente","general-error-message":"Qualcosa è andato storto","get-token":"Ottieni token","get-user-apps-failed":"Recupero delle app dell\'utente non riuscito","get_help":"Ottenere aiuto","gql-query":"Query GQL","header-parameters":"Parametri dell\'intestazione","headers":"intestazioni","http-headers":"Intestazioni HTTP","install-sdk":"Installa SDK per ( {parent} ) {library}","install-sdk-button":"Installa SDK","invalid-response-object":"La risposta deve essere un oggetto JSON valido","invalid-response-object-parsing-error":"Impossibile analizzare la risposta","latest":"più recente","media-types":"Tipi di supporto","message_failed":"Messaggio non riuscito. Per favore riprova più tardi.","message_sent_to_provider":"Messaggio inviato! Il fornitore dell\'API ti contatterà presto.","mock-response-header-notification":"Questo endpoint è configurato per restituire una risposta fittizia.","more-details":"Più dettagli","my-apps":"Le mie applicazioni","need_to_login_title":"Devi accedere a RapidAPI","need_to_subscribe_title":"Devi iscriverti all\'API","new":"Nuovo","no-example-response":"Non c\'è una risposta di esempio per questo endpoint","no-user-default-key":"REGISTRAZIONE-PER-CHIAVE","ok_button_text":"Spedire","one-version-header-notification":"Una sola versione può essere collegata a un\'app. Per continuare il test, crea una nuova app, scegli un\'app diversa o aggiorna la versione in <myAppLink> {myApps} </myAppLink>","optional-parameters":"Parametri opzionali","password-required":"E \'richiesta la password","path_to_variable":"Percorso verso la variabile","post_new_discussion":"Pubblica una nuova discussione","question_body":"Corpo della domanda","report_issue_to_rapidapi":"Segnala il problema a RapidAPI","request-body":"Richiedi corpo","required-parameters":"Parametri richiesti","results":"Risultati","run-on-repl-it":"esegui il codice su repl.it","save":"Salva","schema":"Schema","search-endpoints":"Endpoint di ricerca","search_api_specs":"cerca le specifiche dell\'API","select-example":"Seleziona un esempio","select_file":"Seleziona il file","status-codes":"Codici di stato","subscribe_to_test":"Iscriviti al test","test_endpoint":"Endpoint di prova","try_again":"Riprova","update_asset_error":"Impossibile aggiornare la risorsa","username-required":"è richiesto il nome utente","variables":"Variabili","version-test_label":"Seleziona una versione","version-test_tooltip":"Stai visualizzando una versione API più recente","visible":"Visibile","whitelist-api":"Consenti API","whitelist-api-header-notification":"L\'app selezionata richiede le autorizzazioni per effettuare chiamate all\'API. Aggiungi questa API all\'elenco consentito utilizzando il pulsante \\"Consenti API\\" o le impostazioni di configurazione dell\'app nella dashboard per sviluppatori.","whitelist-app-access":"Accesso all\'app"}')},ko:{code:"ko",translations:JSON.parse('{"add-new-app":"새 앱 추가","add_new_app_for_version":"이 버전에 대한 새 앱 추가","app-name":"앱 이름","authenticate":"인증","body":"신체","cancel":"취소","cancel_button_text":"취소","cancel_version_change":"버전 변경 취소","client-id-required":"클라이언트 ID가 필요합니다.","client-secret-required":"클라이언트 비밀번호가 필요합니다.","close":"닫기","code-snippets":"코드 조각","collapse-all":"모든 축소","connect_app_to_version_alert":"API 버전 <strong> {versionName} </strong> 이(가) \\" <strong> {appName} </strong> \\" 앱에 연결되지 않았습니다.","connect_app_to_version_failed_notification":"귀하의 응용 프로그램 <strong> {appName} </strong> 버전에 연결하는 데 실패 <strong> {versionName} </strong>","connect_app_to_version_notification":"귀하의 앱 <strong> {appName} </strong> <strong> {versionName} </strong> 버전을 사용하고 있습니다.","connect_to_current_version":"현재 앱에 연결","contact_api_provider":"API 제공 업체에 문의","copied-to-clipboard":"클립 보드에 복사 됨","copy":"복사","copy-code":"코드 복사","create_new_app_message":"API 버전 <strong> {versionName} </strong> 이(가) 새 앱에 연결됩니다.","current":"흐름","default":"기본","deprecated":"더 이상 사용되지 않는","description":"기술","discussions_question_title":"{developer} , 안녕하세요. 언제든지 질문 해주세요.","do-not-include-in-request":"요청에 포함하지 마십시오","download":"다운로드","download-api-spec":"API 사양 다운로드","download-api-spec-failed":"API 사양 다운로드 실패","download-api-spec-failed-not-authorized":"이 API 사양을 다운로드 할 권한이 없습니다.","download-api-spec-failed-not-found":"API 사양을 찾을 수 없음","download-current-spec":"현재 사양","download-original-spec":"원래 사양","download_asset_failed":"\\" {assetName} \\" 자산을 다운로드하지 못했습니다.","empty-response-result-message":"엔드 포인트를 테스트하면 결과가 표시됩니다.","endpoints-restricted-for-subscription":"가입 한 플랜은이 엔드 포인트에 대한 액세스를 허용하지 않습니다. 플랜을 업그레이드하거나 <a> API 제공 업체에 문의 </a> .","enter-app-name":"앱 이름 입력","enter-app-name-error":"3 자 이상의 앱 이름을 입력하세요!","example":"예","example-response":"예제 응답","example-responses":"예제 응답","expand-all":"모두 확장","files":"파일","form-field-geo-pattern":"{name} 은 지리적 위치 패턴과 일치해야합니다. 즉 (0,0)","form-field-required":"{name} 은 필수입니다.","general-error-boundary-message":"문제가 발생했습니다. 우리는이를 알고 있으며이를 신속하게 해결하려고합니다.","general-error-message":"뭔가 잘못됨","get-token":"토큰 받기","get-user-apps-failed":"사용자의 앱 가져 오기 실패","get_help":"도움 받기","gql-query":"GQL 쿼리","header-parameters":"헤더 매개 변수","headers":"헤더","http-headers":"HTTP 헤더","install-sdk":"{parent} ) {library} 용 SDK 설치","install-sdk-button":"SDK 설치","invalid-response-object":"응답은 유효한 JSON 개체 여야합니다.","invalid-response-object-parsing-error":"응답을 파싱하지 못했습니다.","latest":"최신","media-types":"미디어 유형","message_failed":"메시지가 실패했습니다. 나중에 다시 시도 해주십시오.","message_sent_to_provider":"메시지가 보내졌습니다! API 제공 업체에서 곧 연락을 드릴 것입니다.","mock-response-header-notification":"이 엔드 포인트는 모의 응답을 반환하도록 구성됩니다.","more-details":"자세한 내용은","my-apps":"나의 앱들","need_to_login_title":"RapidAPI에 로그인해야합니다.","need_to_subscribe_title":"API를 구독해야합니다.","new":"새로운","no-example-response":"이 엔드 포인트에 대한 예제 응답이 없습니다.","no-user-default-key":"키 등록","ok_button_text":"보내다","one-version-header-notification":"하나의 앱에 하나의 버전 만 연결할 수 있습니다. 테스트를 계속하려면 새 앱을 생성하거나 다른 앱을 선택하거나 <myAppLink> {myApps} </myAppLink>","optional-parameters":"선택적 매개 변수","password-required":"비밀번호가 필요합니다","path_to_variable":"변수 경로","post_new_discussion":"새 토론 게시","question_body":"질문 본문","report_issue_to_rapidapi":"RapidAPI에 문제보고","request-body":"요청 본문","required-parameters":"필수 매개 변수","results":"결과","run-on-repl-it":"repl.it에서 코드 실행","save":"저장","schema":"개요","search-endpoints":"엔드 포인트 검색","search_api_specs":"API 사양 검색","select-example":"예를 선택하세요","select_file":"파일 선택","status-codes":"상태 코드","subscribe_to_test":"테스트 구독","test_endpoint":"테스트 끝점","try_again":"다시 시도하십시오","update_asset_error":"자산을 업데이트하지 못했습니다.","username-required":"사용자 이름이 필요합니다","variables":"변수","version-test_label":"버전 선택","version-test_tooltip":"최신 API 버전을보고 있습니다.","visible":"보이는","whitelist-api":"API 허용","whitelist-api-header-notification":"선택한 앱에는 API를 호출 할 수있는 권한이 필요합니다. \'API 허용\'버튼을 사용하거나 개발자 대시 보드의 앱 구성 설정을 사용하여이 API를 허용 목록에 추가하세요.","whitelist-app-access":"앱 액세스"}')},nl:{code:"nl",translations:JSON.parse('{"add-new-app":"Nieuwe app toevoegen","add_new_app_for_version":"Nieuwe app toevoegen voor deze versie","app-name":"Applicatie naam","authenticate":"Authenticeren","body":"Lichaam","cancel":"annuleren","cancel_button_text":"annuleren","cancel_version_change":"Versiewijziging annuleren","client-id-required":"Klant-ID is vereist","client-secret-required":"Klantgeheim is vereist","close":"Dichtbij","code-snippets":"Codefragmenten","collapse-all":"Alles inklappen","connect_app_to_version_alert":"API-versie <strong> {versionName} </strong> is niet verbonden met app \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"Uw app <strong> {appName} </strong> geen verbinding maken met de versie <strong> {versionName} </strong>","connect_app_to_version_notification":"Uw app <strong> {appName} </strong> nu versie <strong> {versionName} </strong>","connect_to_current_version":"Verbinden met huidige app","contact_api_provider":"Neem contact op met API-provider","copied-to-clipboard":"Gekopieerd naar het klembord","copy":"Kopiëren","copy-code":"Kopieer code","create_new_app_message":"API-versie <strong> {versionName} </strong> wordt verbonden met nieuwe app","current":"actueel","default":"standaard","deprecated":"verouderd","description":"Omschrijving","discussions_question_title":"Hallo {developer} , stel gerust je vraag:","do-not-include-in-request":"Niet opnemen in aanvraag","download":"Downloaden","download-api-spec":"API-specificatie downloaden","download-api-spec-failed":"Download API-specificatie mislukt","download-api-spec-failed-not-authorized":"U bent niet geautoriseerd om deze API-specificatie te downloaden","download-api-spec-failed-not-found":"API-specificatie niet gevonden","download-current-spec":"Huidige specificaties","download-original-spec":"Originele specificaties","download_asset_failed":"Kan item \\" {assetName} \\" niet downloaden","empty-response-result-message":"Resultaten worden weergegeven wanneer een eindpunt wordt getest.","endpoints-restricted-for-subscription":"Het abonnement waarop u bent geabonneerd, geeft geen toegang tot dit eindpunt. upgrade uw abonnement of <a> Neem contact op met API-provider </a> .","enter-app-name":"Voer app-naam in","enter-app-name-error":"Voer de app-naam in die uit minimaal 3 tekens bestaat!","example":"Voorbeeld","example-response":"Voorbeeldreactie","example-responses":"Voorbeeldreacties","expand-all":"Alles uitvouwen","files":"Bestanden","form-field-geo-pattern":"{name} moet overeenkomen met een geopuntpatroon. dwz (0,0)","form-field-required":"{name} is vereist","general-error-boundary-message":"Er is iets misgegaan, we weten het en proberen dit snel op te lossen","general-error-message":"Er is iets fout gegaan","get-token":"Token ophalen","get-user-apps-failed":"Krijg gebruikersapps mislukt","get_help":"Krijg hulp","gql-query":"GQL-query","header-parameters":"Koptekstparameters","headers":"Kopteksten","http-headers":"HTTP-headers","install-sdk":"Installeer SDK voor ( {parent} ) {library}","install-sdk-button":"SDK installeren","invalid-response-object":"Het antwoord moet een geldig JSON-object zijn","invalid-response-object-parsing-error":"Kan de reactie niet parseren","latest":"laatste","media-types":"Mediatypen","message_failed":"Bericht mislukt. Probeer het later opnieuw.","message_sent_to_provider":"Bericht verzonden! De API-provider zal binnenkort contact met u opnemen.","mock-response-header-notification":"Dit eindpunt is geconfigureerd om een schijnreactie te retourneren.","more-details":"Meer details","my-apps":"Mijn apps","need_to_login_title":"U moet inloggen op RapidAPI","need_to_subscribe_title":"U moet zich abonneren op de API","new":"Nieuw","no-example-response":"Er is geen voorbeeldreactie voor dit eindpunt","no-user-default-key":"AANMELDEN-VOOR-SLEUTEL","ok_button_text":"Sturen","one-version-header-notification":"Er kan slechts één versie aan een App worden gekoppeld. Om door te gaan met testen, maakt u een nieuwe app, kiest u een andere app of werkt u de versie bij in <myAppLink> {myApps} </myAppLink>","optional-parameters":"Optionele parameters:","password-required":"Een wachtwoord is verplicht","path_to_variable":"Pad naar variabele","post_new_discussion":"Nieuwe discussie plaatsen","question_body":"Vraagtekst","report_issue_to_rapidapi":"Probleem melden aan RapidAPI","request-body":"Verzoektekst","required-parameters":"Vereiste parameters:","results":"Resultaten","run-on-repl-it":"voer code uit op repl.it","save":"sparen","schema":"Schema","search-endpoints":"Zoek eindpunten","search_api_specs":"zoeken naar API-specificaties","select-example":"Selecteer een voorbeeld","select_file":"Selecteer bestand","status-codes":"Statuscodes","subscribe_to_test":"Abonneer je op Test","test_endpoint":"Eindpunt testen","try_again":"Probeer het nog eens","update_asset_error":"Kan item niet updaten","username-required":"Gebruikersnaam is verplicht","variables":"Variabelen","version-test_label":"Selecteer een versie","version-test_tooltip":"U bekijkt een nieuwere API-versie","visible":"Zichtbaar","whitelist-api":"API toestaan","whitelist-api-header-notification":"Uw geselecteerde app heeft machtigingen nodig om de API aan te roepen. Voeg deze API toe aan de toegestane lijst met behulp van de knop \'API toestaan\' of de configuratie-instellingen van de app in uw ontwikkelaarsdashboard.","whitelist-app-access":"App-toegang"}')},pt:{code:"pt",translations:JSON.parse('{"add-new-app":"Adicionar novo aplicativo","add_new_app_for_version":"Adicionar novo aplicativo para esta versão","app-name":"Nome do aplicativo","authenticate":"Autenticar","body":"Corpo","cancel":"cancelar","cancel_button_text":"Cancelar","cancel_version_change":"Cancelar alteração de versão","client-id-required":"ID do cliente é necessária","client-secret-required":"O segredo do cliente é obrigatório","close":"Perto","code-snippets":"Partes de codigo","collapse-all":"Recolher todos","connect_app_to_version_alert":"A versão da API <strong> {versionName} </strong> não está conectada ao aplicativo \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"Seu aplicativo <strong> {appName} </strong> falhou ao se conectar à versão <strong> {versionName} </strong>","connect_app_to_version_notification":"Seu aplicativo <strong> {appName} </strong> agora está usando a versão <strong> {versionName} </strong>","connect_to_current_version":"Conecte-se ao aplicativo atual","contact_api_provider":"Entre em contato com o provedor de API","copied-to-clipboard":"Copiado para a área de transferência","copy":"cópia de","copy-code":"Copiar Código","create_new_app_message":"A versão da API <strong> {versionName} </strong> será conectada ao novo aplicativo","current":"atual","default":"predefinição","deprecated":"descontinuada","description":"Descrição","discussions_question_title":"Olá {developer} , fique à vontade para fazer sua pergunta:","do-not-include-in-request":"Não inclua no pedido","download":"Download","download-api-spec":"Baixar API Spec","download-api-spec-failed":"Falha na especificação de download da API","download-api-spec-failed-not-authorized":"Você não está autorizado a baixar esta especificação de API","download-api-spec-failed-not-found":"Especificação API não encontrada","download-current-spec":"Especificação atual","download-original-spec":"Especificação original","download_asset_failed":"Falha ao fazer download do recurso \\" {assetName} \\"","empty-response-result-message":"Os resultados são exibidos quando um terminal é testado.","endpoints-restricted-for-subscription":"O plano que você assinou não permite acesso a este terminal. atualize seu plano ou <a> Entre em contato com o provedor de API </a> .","enter-app-name":"Insira o nome do aplicativo","enter-app-name-error":"Insira o nome do aplicativo com pelo menos 3 caracteres!","example":"Exemplo","example-response":"Resposta de exemplo","example-responses":"Respostas de exemplo","expand-all":"Expandir todos","files":"arquivos","form-field-geo-pattern":"{name} deve corresponder a um padrão de ponto geográfico. ou seja (0,0)","form-field-required":"{name} é obrigatório","general-error-boundary-message":"Algo deu errado, nós sabemos disso e estamos tentando consertar isso rapidamente","general-error-message":"Algo deu errado","get-token":"Obter Token","get-user-apps-failed":"Falha ao obter aplicativos do usuário","get_help":"Obter ajuda","gql-query":"Consulta GQL","header-parameters":"Parâmetros do cabeçalho","headers":"Cabeçalhos","http-headers":"Cabeçalhos HTTP","install-sdk":"Instale o SDK para ( {parent} ) {library}","install-sdk-button":"Instale o SDK","invalid-response-object":"A resposta deve ser um objeto JSON válido","invalid-response-object-parsing-error":"Falha ao analisar a resposta","latest":"Mais recentes","media-types":"Tipos de mídia","message_failed":"A mensagem falhou. Por favor, tente novamente mais tarde.","message_sent_to_provider":"Mensagem enviada! O provedor de API entrará em contato em breve.","mock-response-header-notification":"Este ponto de extremidade está configurado para retornar uma resposta simulada.","more-details":"Mais detalhes","my-apps":"Meus Apps","need_to_login_title":"Você precisa fazer o login no RapidAPI","need_to_subscribe_title":"Você precisa se inscrever na API","new":"Novo","no-example-response":"Não há resposta de exemplo para este endpoint","no-user-default-key":"INSCREVA-SE PARA A CHAVE","ok_button_text":"Mandar","one-version-header-notification":"Apenas uma versão pode ser vinculada a um aplicativo. Para continuar o teste, crie um novo aplicativo, escolha um aplicativo diferente ou atualize a versão em <myAppLink> {myApps} </myAppLink>","optional-parameters":"Parâmetros Opcionais","password-required":"Senha requerida","path_to_variable":"Caminho para a variável","post_new_discussion":"Postar nova discussão","question_body":"Corpo da Pergunta","report_issue_to_rapidapi":"Reportar problema ao RapidAPI","request-body":"Corpo de Solicitação","required-parameters":"Parâmetros Requeridos","results":"Resultados","run-on-repl-it":"execute o código em repl.it","save":"Salve ","schema":"Esquema","search-endpoints":"Pesquisar endpoints","search_api_specs":"pesquisar especificações de API","select-example":"Selecione um exemplo","select_file":"Selecione o arquivo","status-codes":"Códigos de status","subscribe_to_test":"Inscreva-se para testar","test_endpoint":"Endpoint de teste","try_again":"Tente novamente","update_asset_error":"Falha ao atualizar o recurso","username-required":"Nome de usuário é requerido","variables":"Variáveis","version-test_label":"Selecione uma versão","version-test_tooltip":"Você está visualizando uma versão mais recente da API","visible":"Visível","whitelist-api":"Permitir API","whitelist-api-header-notification":"Seu aplicativo selecionado requer permissões para fazer chamadas para a API. Adicione esta API à lista permitida usando o botão \'Permitir API\' ou as configurações do aplicativo em seu Painel de Controle do Desenvolvedor.","whitelist-app-access":"Acesso de aplicativo"}')},ru:{code:"ru",translations:JSON.parse('{"add-new-app":"Добавить новое приложение","add_new_app_for_version":"Добавить новое приложение для этой версии","app-name":"Имя приложения","authenticate":"Аутентифицировать","body":"Тело","cancel":"отменить","cancel_button_text":"Отмена","cancel_version_change":"Отменить изменение версии","client-id-required":"Требуется идентификатор клиента","client-secret-required":"Требуется секрет клиента","close":"Закрывать","code-snippets":"Фрагменты кода","collapse-all":"Свернуть все","connect_app_to_version_alert":"Версия API <strong> {versionName} </strong> не подключена к приложению \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"Вашему приложению <strong> {appName} </strong> не удалось подключиться к версии <strong> {versionName} </strong>","connect_app_to_version_notification":"Ваше приложение <strong> {appName} </strong> теперь использует версию <strong> {versionName} </strong>","connect_to_current_version":"Подключиться к текущему приложению","contact_api_provider":"Связаться с поставщиком API","copied-to-clipboard":"Скопировано в буфер обмена","copy":"Копировать","copy-code":"Копировать код","create_new_app_message":"Версия API <strong> {versionName} </strong> будет подключена к новому приложению.","current":"Текущий","default":"дефолт","deprecated":"устарел","description":"Описание","discussions_question_title":"Добрый день, {developer} Задайте свой вопрос:","do-not-include-in-request":"Не включать в запрос","download":"Скачать","download-api-spec":"Скачать спецификацию API","download-api-spec-failed":"Не удалось загрузить спецификацию API","download-api-spec-failed-not-authorized":"Вы не уполномочены загружать эту спецификацию API","download-api-spec-failed-not-found":"Спецификация API не найдена","download-current-spec":"Текущая спецификация","download-original-spec":"Оригинальная спецификация","download_asset_failed":"Не удалось загрузить ресурс \\" {assetName} \\"","empty-response-result-message":"Результаты отображаются при тестировании конечной точки.","endpoints-restricted-for-subscription":"План, на который вы подписаны, не разрешает доступ к этой конечной точке. обновите свой тарифный план или <a> обратитесь к поставщику API </a> .","enter-app-name":"Введите название приложения","enter-app-name-error":"Пожалуйста, введите название приложения, содержащее не менее 3 символов!","example":"Пример","example-response":"Пример ответа","example-responses":"Примеры ответов","expand-all":"Расширить все","files":"Файлы","form-field-geo-pattern":"{name} должно соответствовать шаблону географической точки. т.е. (0,0)","form-field-required":"{name} требуется","general-error-boundary-message":"Что-то пошло не так, мы это знаем и пытаемся быстро это исправить","general-error-message":"Что-то пошло не так","get-token":"Получить токен","get-user-apps-failed":"Ошибка получения приложений пользователя","get_help":"Получить помощь","gql-query":"Запрос GQL","header-parameters":"Параметры заголовка","headers":"Заголовки","http-headers":"Заголовки HTTP","install-sdk":"Установите SDK для ( {parent} ) {library}","install-sdk-button":"Установить SDK","invalid-response-object":"Ответ должен быть действительным объектом JSON.","invalid-response-object-parsing-error":"Не удалось разобрать ответ","latest":"последний","media-types":"Типы СМИ","message_failed":"Сообщение не удалось. Пожалуйста, повторите попытку позже.","message_sent_to_provider":"Сообщение отправлено! Поставщик API свяжется с вами в ближайшее время.","mock-response-header-notification":"Эта конечная точка настроена для возврата фиктивного ответа.","more-details":"Подробнее","my-apps":"Мои приложения","need_to_login_title":"Вам необходимо войти в RapidAPI","need_to_subscribe_title":"Вам необходимо подписаться на API","new":"Новый","no-example-response":"Для этой конечной точки нет примера ответа","no-user-default-key":"ПОДПИСАТЬСЯ НА КЛЮЧ","ok_button_text":"послать","one-version-header-notification":"С приложением можно связать только одну версию. Чтобы продолжить тестирование, создайте новое приложение, выберите другое приложение или обновите версию в <myAppLink> {myApps} </myAppLink>","optional-parameters":"Дополнительные параметры","password-required":"необходим пароль","path_to_variable":"Путь к переменной","post_new_discussion":"Опубликовать новое обсуждение","question_body":"Тело вопроса","report_issue_to_rapidapi":"Сообщить о проблеме в RapidAPI","request-body":"Тело запроса","required-parameters":"Обязательные параметры","results":"Полученные результаты","run-on-repl-it":"запустить код на repl.it","save":"спасти","schema":"Схема","search-endpoints":"Поиск конечных точек","search_api_specs":"поиск спецификаций API","select-example":"Выберите пример","select_file":"Выбрать файл","status-codes":"Коды состояния","subscribe_to_test":"Подпишитесь на тест","test_endpoint":"Конечная точка тестирования","try_again":"Попробуйте еще раз","update_asset_error":"Не удалось обновить актив","username-required":"Имя пользователя требуется","variables":"Переменные","version-test_label":"Выберите версию","version-test_tooltip":"Вы просматриваете более новую версию API","visible":"Видимый","whitelist-api":"Разрешить API","whitelist-api-header-notification":"Выбранное вами приложение требует разрешений для вызовов API. Добавьте этот API в список разрешенных с помощью кнопки «Разрешить API» или настроек конфигурации приложения на панели инструментов разработчика.","whitelist-app-access":"Доступ к приложению"}')},tr:{code:"tr",translations:JSON.parse('{"add-new-app":"Yeni Uygulama Ekle","add_new_app_for_version":"Bu sürüm için yeni Uygulama ekle","app-name":"Uygulama ismi","authenticate":"kimlik doğrulama","body":"Vücut","cancel":"iptal etmek","cancel_button_text":"İptal etmek","cancel_version_change":"Sürüm değişikliğini iptal et","client-id-required":"Müşteri Kimliği gerekli","client-secret-required":"İstemci Sırrı gerekli","close":"Kapat","code-snippets":"Kod parçacıkları","collapse-all":"Hepsini Daralt","connect_app_to_version_alert":"API sürümü <strong> {versionName} </strong> , \\" <strong> {appName} </strong> \\" Uygulamasına bağlı değil","connect_app_to_version_failed_notification":"Uygulamanız <strong> {appName} </strong> <strong> {versionName} </strong> sürümüne bağlanamadı","connect_app_to_version_notification":"<strong> {appName} </strong> <strong> {versionName} </strong> sürümünü kullanıyor","connect_to_current_version":"Mevcut Uygulamaya bağlan","contact_api_provider":"API Sağlayıcısıyla İletişime Geçin","copied-to-clipboard":"Panoya kopyalandı","copy":"kopyala","copy-code":"Kodu Kopyala","create_new_app_message":"API sürümü <strong> {versionName} </strong> yeni Uygulamaya bağlanacak","current":"mevcut","default":"varsayılan","deprecated":"kullanımdan kaldırıldı","description":"Açıklama","discussions_question_title":"Merhaba {developer} , sorunuzu sormaktan çekinmeyin:","do-not-include-in-request":"İsteğe dahil etmeyin","download":"İndirmek","download-api-spec":"API Spesifikasyonunu İndirin","download-api-spec-failed":"API Spesifikasyonu İndirilemedi","download-api-spec-failed-not-authorized":"Bu API Spesifikasyonunu İndirmeye Yetkili Değilsiniz","download-api-spec-failed-not-found":"API Özelliği Bulunamadı","download-current-spec":"Mevcut özellik","download-original-spec":"Orijinal özellik","download_asset_failed":"\\" {assetName} \\" öğesi indirilemedi","empty-response-result-message":"Bir uç nokta test edildiğinde sonuçlar görüntülenir.","endpoints-restricted-for-subscription":"Abone olduğunuz plan, bu uç noktaya erişime izin vermiyor. lütfen planınızı yükseltin veya <a> API Sağlayıcısıyla İletişime Geçin </a> .","enter-app-name":"Uygulama adını girin","enter-app-name-error":"Lütfen en az 3 karakterden oluşan uygulama adını girin!","example":"Misal","example-response":"Örnek Yanıt","example-responses":"Örnek Yanıtlar","expand-all":"Hepsini genişlet","files":"Dosyalar","form-field-geo-pattern":"{name} , bir coğrafi nokta düzeniyle eşleşmelidir. yani (0,0)","form-field-required":"{name} gerekli","general-error-boundary-message":"Bir Yanlışlık Oldu, Bunu Biliyoruz ve Hızla Düzeltmeye Çalışıyoruz","general-error-message":"Bir şeyler yanlış gitti","get-token":"Token Al","get-user-apps-failed":"Kullanıcının Uygulamaları Başarısız Oldu","get_help":"Yardım almak","gql-query":"GQL Sorgusu","header-parameters":"Başlık Parametreleri","headers":"Başlıklar","http-headers":"HTTP Başlıkları","install-sdk":"{parent} ) {library} için SDK yükleyin","install-sdk-button":"SDK\'yı yükle","invalid-response-object":"Yanıt, geçerli bir JSON nesnesi olmalıdır","invalid-response-object-parsing-error":"Yanıt ayrıştırılamadı","latest":"En son","media-types":"Medya Türleri","message_failed":"Mesaj başarısız oldu. Lütfen daha sonra tekrar deneyiniz.","message_sent_to_provider":"Mesajı gönderildi! API sağlayıcı yakında sizinle iletişime geçecektir.","mock-response-header-notification":"Bu uç nokta, sahte bir yanıt döndürecek şekilde yapılandırılmıştır.","more-details":"Daha fazla detay","my-apps":"Benim uygulamalarım","need_to_login_title":"RapidAPI\'ye giriş yapmanız gerekiyor","need_to_subscribe_title":"API\'ye abone olmanız gerekiyor","new":"Yeni","no-example-response":"Bu uç nokta için örnek bir yanıt yok","no-user-default-key":"ANAHTAR İÇİN KAYDOL","ok_button_text":"gönder","one-version-header-notification":"Bir Uygulamaya yalnızca bir sürüm bağlanabilir. Teste devam etmek için yeni bir uygulama oluşturun, farklı bir uygulama seçin veya <myAppLink> {myApps} </myAppLink>","optional-parameters":"Opsiyonel Parametreler","password-required":"Şifre gereklidir","path_to_variable":"Değişkene giden yol","post_new_discussion":"Yeni tartışma yayınla","question_body":"Soru Gövdesi","report_issue_to_rapidapi":"Sorunu RapidAPI\'ye bildirin","request-body":"İstek Gövdesi","required-parameters":"Gerekli Parametreler","results":"Sonuçlar","run-on-repl-it":"repl.it\'te kod çalıştır","save":"kayıt etmek","schema":"Şema","search-endpoints":"Uç noktaları ara","search_api_specs":"API özelliklerini arayın","select-example":"Bir örnek seçin","select_file":"Dosya Seç","status-codes":"Durum Kodları","subscribe_to_test":"Teste Abone Ol","test_endpoint":"Test Uç Noktası","try_again":"Tekrar deneyin","update_asset_error":"Öğe güncellenemedi","username-required":"Kullanıcı adı gerekli","variables":"Değişkenler","version-test_label":"Bir sürüm seç","version-test_tooltip":"Daha yeni bir API Sürümü görüntülüyorsunuz","visible":"Gözle görülür","whitelist-api":"API\'ye izin ver","whitelist-api-header-notification":"Seçtiğiniz Uygulama, API\'ye çağrı yapmak için izinler gerektiriyor. Lütfen \'API\'ye İzin Ver\' düğmesini veya Geliştirici Kontrol Panelinizdeki Uygulamanın yapılandırma ayarlarını kullanarak bu API\'yi izin verilenler listesine ekleyin.","whitelist-app-access":"Uygulama Erişimi"}')},uk:{code:"uk",translations:JSON.parse('{"add-new-app":"Додати новий додаток","add_new_app_for_version":"Додайте новий додаток для цієї версії","app-name":"Назва програми","authenticate":"Аутентифікація","body":"Тіло","cancel":"скасувати","cancel_button_text":"Скасувати","cancel_version_change":"Скасувати зміну версії","client-id-required":"Потрібен ідентифікатор клієнта","client-secret-required":"Потрібна таємниця клієнта","close":"Закрити","code-snippets":"Фрагменти коду","collapse-all":"Закрити всі","connect_app_to_version_alert":"Версія API <strong> {versionName} </strong> не підключена до програми \\" <strong> {appName} </strong> \\"","connect_app_to_version_failed_notification":"Не вдалося під’єднати додаток <strong> {appName} </strong> <strong> {versionName} </strong>","connect_app_to_version_notification":"Ваш додаток <strong> {appName} </strong> зараз використовує версію <strong> {versionName} </strong>","connect_to_current_version":"Підключіться до поточної програми","contact_api_provider":"Зверніться до постачальника API","copied-to-clipboard":"Скопійовано в буфер обміну","copy":"Копія","copy-code":"Скопіюйте код","create_new_app_message":"Версія API <strong> {versionName} </strong> буде підключена до нової програми","current":"струм","default":"за замовчуванням","deprecated":"застарів","description":"Опис","discussions_question_title":"Привіт, {developer} , сміливо задавай своє запитання:","do-not-include-in-request":"Не включати в запит","download":"Завантажити","download-api-spec":"Завантажте специфікацію API","download-api-spec-failed":"Не вдалося завантажити специфікацію API","download-api-spec-failed-not-authorized":"Ви не маєте права завантажувати цю специфікацію API","download-api-spec-failed-not-found":"Специфікація API не знайдена","download-current-spec":"Поточні характеристики","download-original-spec":"Оригінальна специфікація","download_asset_failed":"Не вдалося завантажити ресурс \\" {assetName} \\".","empty-response-result-message":"Результати відображаються під час тестування кінцевої точки.","endpoints-restricted-for-subscription":"План, на який ви підписані, не дозволяє доступ до цієї кінцевої точки. оновіть свій план або <a> зв’яжіться з постачальником API </a> .","enter-app-name":"Введіть назву програми","enter-app-name-error":"Введіть назву програми, яка має щонайменше 3 символи!","example":"Приклад","example-response":"Приклад відповіді","example-responses":"Приклади відповідей","expand-all":"Розгорнути все","files":"Файли","form-field-geo-pattern":"{name} має відповідати шаблону геоточки. тобто (0,0)","form-field-required":"Потрібно {name}","general-error-boundary-message":"Щось пішло не так, ми це знаємо і намагаємось це швидко виправити","general-error-message":"Щось пішло не так","get-token":"Отримайте жетон","get-user-apps-failed":"Не вдалося отримати програми користувача","get_help":"Отримати допомогу","gql-query":"Запит GQL","header-parameters":"Параметри заголовка","headers":"Заголовки","http-headers":"Заголовки HTTP","install-sdk":"Встановити SDK для ( {parent} ) {library}","install-sdk-button":"Встановіть SDK","invalid-response-object":"Відповідь має бути дійсним об’єктом JSON","invalid-response-object-parsing-error":"Не вдалося проаналізувати відповідь","latest":"найновіший","media-types":"Типи носіїв","message_failed":"Помилка повідомлення. Будь-ласка спробуйте пізніше.","message_sent_to_provider":"Повідомлення надіслано! Постачальник API незабаром зв’яжеться з вами.","mock-response-header-notification":"Ця кінцева точка налаштована на повернення імітованої відповіді.","more-details":"Детальніше","my-apps":"Мої програми","need_to_login_title":"Вам потрібно увійти до RapidAPI","need_to_subscribe_title":"Вам потрібно підписатися на API","new":"новий","no-example-response":"Для цієї кінцевої точки немає прикладу відповіді","no-user-default-key":"РЕЄСТРАЦІЯ НА КЛЮЧ","ok_button_text":"Надіслати","one-version-header-notification":"Лише одна версія може бути пов’язана з додатком. Щоб продовжити тестування, створіть новий додаток, виберіть інший додаток або оновіть версію в <myAppLink> {myApps} </myAppLink>","optional-parameters":"Необов’язкові параметри","password-required":"Потрібен пароль","path_to_variable":"Шлях до змінної","post_new_discussion":"Опублікувати нове обговорення","question_body":"Орган запитань","report_issue_to_rapidapi":"Повідомте про проблему RapidAPI","request-body":"Орган запиту","required-parameters":"Обов’язкові параметри","results":"Результати","run-on-repl-it":"запустити код на repl.it","save":"зберегти","schema":"Схема","search-endpoints":"Шукати кінцеві точки","search_api_specs":"пошук специфікацій API","select-example":"Виберіть приклад","select_file":"Виберіть Файл","status-codes":"Коди стану","subscribe_to_test":"Підпишіться на тест","test_endpoint":"Тестова кінцева точка","try_again":"Спробуйте знову","update_asset_error":"Не вдалося оновити актив","username-required":"Ім\'я користувача потрібно","variables":"Змінні","version-test_label":"Виберіть версію","version-test_tooltip":"Ви переглядаєте новішу версію API","visible":"Видно","whitelist-api":"Дозволити API","whitelist-api-header-notification":"Для вибраного додатка потрібні дозволи для здійснення дзвінків до API. Будь ласка, додайте цей API до дозволеного списку за допомогою кнопки «Дозволити API» або налаштувань конфігурації програми на Вашій інформаційній панелі розробника.","whitelist-app-access":"Доступ до програми"}')},zh:{code:"zh",translations:JSON.parse('{"add-new-app":"添加新应用","add_new_app_for_version":"为此版本添加新应用","app-name":"应用名称","authenticate":"认证","body":"身体","cancel":"取消","cancel_button_text":"取消","cancel_version_change":"取消版本更改","client-id-required":"需要客户 ID","client-secret-required":"客户端密码是必需的","close":"关闭","code-snippets":"代码片段","collapse-all":"全部收缩","connect_app_to_version_alert":"API 版本<strong> {versionName} </strong>未连接到应用程序“ <strong> {appName} </strong> ”","connect_app_to_version_failed_notification":"您的应用<strong> {appName} </strong>未能连接到版本<strong> {versionName} </strong>","connect_app_to_version_notification":"您的应用<strong> {appName} </strong>现在使用的是<strong> {versionName} </strong>","connect_to_current_version":"连接到当前应用","contact_api_provider":"联系 API 提供商","copied-to-clipboard":"复制到剪贴板","copy":"复制","copy-code":"复制代码","create_new_app_message":"API 版本<strong> {versionName} </strong>将连接到新应用","current":"当前的","default":"默认","deprecated":"已弃用","description":"描述","discussions_question_title":"嗨{developer} ，请随时提出您的问题：","do-not-include-in-request":"不包括在请求中","download":"下载","download-api-spec":"下载 API 规范","download-api-spec-failed":"下载 API 规范失败","download-api-spec-failed-not-authorized":"您无权下载此 API 规范","download-api-spec-failed-not-found":"未找到 API 规范","download-current-spec":"当前规格","download-original-spec":"原始规格","download_asset_failed":"未能下载“ {assetName} ”资产","empty-response-result-message":"测试端点时会显示结果。","endpoints-restricted-for-subscription":"您订阅的计划不允许访问此端点。请升级您的计划或<a>联系 API 提供商</a> 。","enter-app-name":"输入应用名称","enter-app-name-error":"请输入至少 3 个字符的应用名称！","example":"例子","example-response":"示例响应","example-responses":"示例响应","expand-all":"展开全部","files":"文件","form-field-geo-pattern":"{name}必须匹配地理点模式。即 (0,0)","form-field-required":"{name}是必需的","general-error-boundary-message":"出了点问题，我们知道并试图迅速解决这个问题","general-error-message":"出问题了","get-token":"获取令牌","get-user-apps-failed":"获取用户的应用程序失败","get_help":"得到帮助","gql-query":"GQL 查询","header-parameters":"标题参数","headers":"标题","http-headers":"HTTP 标头","install-sdk":"为 ( {parent} ) {library}","install-sdk-button":"安装 SDK","invalid-response-object":"响应必须是有效的 JSON 对象","invalid-response-object-parsing-error":"无法解析响应","latest":"最新的","media-types":"媒体类型","message_failed":"消息失败。请稍后再试。","message_sent_to_provider":"消息已发送！ API 提供商将很快与您联系。","mock-response-header-notification":"此端点配置为返回模拟响应。","more-details":"更多细节","my-apps":"我的应用","need_to_login_title":"您需要登录RapidAPI","need_to_subscribe_title":"您需要订阅 API","new":"新的","no-example-response":"此端点没有示例响应","no-user-default-key":"注册密钥","ok_button_text":"发送","one-version-header-notification":"一个应用程序只能链接一个版本。要继续测试，请创建一个新应用程序、选择其他应用程序或更新<myAppLink> {myApps} </myAppLink>","optional-parameters":"可选参数","password-required":"密码是必需的","path_to_variable":"变量路径","post_new_discussion":"发表新讨论","question_body":"题体","report_issue_to_rapidapi":"向 RapidAPI 报告问题","request-body":"请求正文","required-parameters":"所需参数","results":"结果","run-on-repl-it":"在 repl.it 上运行代码","save":"保存","schema":"架构","search-endpoints":"搜索端点","search_api_specs":"搜索 API 规范","select-example":"选择一个例子","select_file":"选择文件","status-codes":"状态代码","subscribe_to_test":"订阅测试","test_endpoint":"测试端点","try_again":"再试一次","update_asset_error":"未能更新资产","username-required":"需要用户名","variables":"变量","version-test_label":"选择一个版本","version-test_tooltip":"您正在查看更新的 API 版本","visible":"可见的","whitelist-api":"允许 API","whitelist-api-header-notification":"您选择的应用程序需要调用 API 的权限。请使用“允许 API”按钮或开发人员仪表板中的应用配置设置将此 API 添加到允许列表。","whitelist-app-access":"应用程序访问"}')}};function q(e="en-US"){return C[e]??C["en-US"]}var D=a(41609),T=a.n(D),j=a(24350),O=a.n(j),V=a(75472),z=a.n(V),Z=a(81704),$=a.n(Z),L=a(94287);const R=Object.freeze({USER:"User",ORGANIZATION:"Organization",TEAM:"Team"}),M=e=>!e||L.AccessControlClient.getPermission({userId:e},["PERSONAL_CONTEXT"]).granted,B=e=>null==e||!e.userId||L.AccessControlClient.getPermission(e,["VIEW_APP_KEY"]).granted,U=(e,t,a)=>{if((null==a?void 0:a.type)===R.TEAM){var n;const e=null==a?void 0:a.organization,i=null==a?void 0:a.entityId;return{orgId:e,teamId:i,userId:$()(null==t||null===(n=t[e])||void 0===n?void 0:n.children[i].children)[0]}}return{userId:(null==e?void 0:e.id)||(null==a?void 0:a.id)}},G=({user:e={},api:t={},contextTree:a={}})=>{const{id:n,mashapeId:i}=e,{visibility:r,owner:o,allowedContext:s}=t,{id:l}=o,d=!M(n);if("PRIVATE"!==r)return{context:a,shouldHidePersonalUser:d};const c=e&&(String(n)===String(l)||String(i)===String(l)),p=(s||[]).reduce(((e,t)=>({...e,[`${t}`]:!0})),{}),u=p[`${n}`],m={};return a&&Object.keys(a).forEach((e=>{const t=a[e];m[e]={...a[e],children:{}},Object.values(t.children||{}).forEach((t=>{(p[`${t.id}`]||p[`${t.meshapeId}`])&&(m[e].children[`${t.id}`]={...t})}))})),{context:m,shouldHidePersonalUser:!c&&!u||d}};var H=a(81878);const{extractColorFromTheme:K}=n.Z,Q=o.css`
  background: ${({theme:e})=>K("@okinatako-background-primary",e)};
`,W=(0,o.default)(H.gs)`
  flex: 1;
  overflow-y: hidden;
`,J=(0,o.default)(H.jW)`
  ${Q}
`;var Y=a(45697),X=a.n(Y),ee=a(71577),te=a(67724),ae=a(42762);const ne={fontSize:12},ie=(0,o.default)(ee.Z)`
  position: absolute !important;
  top: 0;
  right: 2px;
  transform: translate(15px, 20px);
  background: white !important;
  && {
    z-index: 999;
  }
`,re=(0,o.default)(te.Z)`
  ${ne}
`,oe=(0,o.default)(ae.Z)`
  ${ne}
`,se=({onCollapseCB:e,name:t})=>{const[a,n]=(0,i.useState)(!1),r=a?oe:re;return i.createElement(ie,{"aria-expanded":!a,"aria-label":t,block:!0,shape:"circle",size:"small",icon:i.createElement(r,null),onClick:function(){n((e=>!e)),e(!a)}})};se.propTypes={onCollapseCB:X().func.isRequired};const le=se,de=(0,o.default)(H.jW)`
  ${Q}
  && {
    overflow: visible;
    display: grid;
  }
  .cover {
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 1;
    z-index: 1;
    &.close {
      visibility: visible;
    }
    &.open {
      visibility: hidden;
    }
  }
`,ce=o.default.div`
  overflow-x: hidden;
  height: 100%;
`;function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},pe.apply(this,arguments)}const ue=15;function me({children:e,...t}){const{size:a,setMaxSize:n,collapsibleReflexLastLocation:r,name:o}=t,s=(0,i.useRef)(),l=(0,i.useRef)(a),[d,c]=(0,i.useState)(!1),[p,u]=(0,i.useState)(a),m=e=>e?ue:r.current;return i.createElement(de,pe({},t,{size:p}),i.createElement(ce,null,i.createElement(le,{onCollapseCB:function(e){l.current=e?r.current:ue;const t=()=>{e&&l.current<=ue||!e&&l.current===m(e)?(e&&n(ue),cancelAnimationFrame(s.current),s.current=void 0):(l.current=((e,t)=>{const a=e?t-50:t+50;if(e&&a<ue)return ue;const n=m(e);return!e&&a>n?n:a})(e,l.current),u(l.current),requestAnimationFrame(t))};s.current||(e||n(),s.current=requestAnimationFrame(t)),c(e)},name:o}),i.createElement("div",{className:"cover "+(d?"close":"open")}),!d&&e))}const ge=i.forwardRef(((e,t)=>i.createElement(me,pe({innerRef:t},e)))),ve=W;var he=a(27361),ke=a.n(he),fe=a(11382),be=a(90860);const{extractColorFromTheme:ye}=n.Z,_e=o.default.div`
  .ant-tabs,
  .ant-tabs-content {
    height: 100%;
  }

  .inner-section {
    &.space-between {
      display: flex;
      justify-content: space-between;
    }
    border-bottom: 1px solid ${({theme:e})=>ye("@okinatako-border-default",e)};
    background-color: ${({theme:e})=>ye("@okinatako-background-secondary",e)};

    .notifications {
      padding: 0 15px;
    }
  }
  .header {
    height: 60px;
    padding: 0 15px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .ant-tabs-ink-bar {
      /* A fix for the right section tabs in the full playground composition */
      height: 2px;
      bottom: -5px;
    }
    .bold {
      font-weight: bold;
    }
    .endpoint-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .endpoint-test-button {
      margin-left: auto;
    }
  }
`,we=(0,o.default)(be.Z)`
  padding: 20px;
`,xe=({testId:e="skeleton-loader",className:t="loading-skeleton",loading:a,children:n})=>i.createElement("div",{"data-id":e},i.createElement(we,{className:t,active:!0,loading:a},n));var Ee=a(86896),Ae=a(82884),Ne=a(76570);const{extractColorFromTheme:Ie}=n.Z,Se=o.default.div`
  width: 100%;
  .endpoints-search-input {
    border-color: ${({theme:e})=>Ie("@okinatako-border-default",e)};
    background-color: ${({theme:e})=>Ie("@okinatako-input-primary",e)}; 
    color: ${({theme:e})=>Ie("@okinatako-content-primary",e)};
    .anticon {
      color: ${({theme:e})=>Ie("@okinatako-content-primary",e)};
    }
  }
`,Pe=({setSearchQuery:e})=>{const{formatMessage:t}=(0,Ee.Z)();return i.createElement(Se,null,i.createElement(Ae.Z,{className:"endpoints-search-input",size:"large",placeholder:t({id:"search-endpoints"}),prefix:i.createElement(Ne.Z,null),onChange:t=>e(t.target.value)}))};Pe.propTypes={setSearchQuery:Y.PropTypes.func.isRequired};const Fe=Pe;var Ce=a(27339),qe=a(91966),De=a.n(qe),Te=a(27279),je=a(57254),Oe=a(8812);const{extractColorFromTheme:Ve}=n.Z,ze=o.default.span`
  padding: 0 5px;
  margin-left: ${({size:e})=>"large"!==e?"7px":"-5px"};
  font-size: ${({size:e})=>{switch(e){case"small":return"8px";case"medium":default:return"10px";case"large":return"16px"}}};
  font-weight: bold;
  user-select: none;
  &.get {
    color: ${({theme:e})=>Ve("@seats-price-free",e)};
  }
  &.post {
    color: ${({theme:e})=>Ve("@rapid-f",e)};
  }
  &.put {
    /* color: ${({theme:e})=>Ve("@rapid-j5",e)}; */
    color: rgb(245, 166, 35);
  }
  &.delete {
    color: ${({theme:e})=>Ve("@rapid-o",e)};
  }
  &.parse {
    color: purple;
  }
  &.patch {
    color: ${({theme:e})=>Ve("@rapid-j5",e)};
  }
`,Ze=({method:e="",size:t="medium"})=>i.createElement(ze,{className:e.toLowerCase(),size:t},i.createElement(Ce.Z,null,e.toUpperCase()));var $e=a(48889),Le=a(68628),Re=a(32156),Me=a.n(Re),Be=a(53787),Ue=a.n(Be);const Ge=(e="")=>new(Ue().Converter)({simplifiedAutoLink:!0,strikethrough:!0,openLinksInNewWindow:!0,tables:!0,ghCodeBlocks:!0,tablesHeaderId:!0,smoothLivePreview:!0,smartIndentationFix:!0,simpleLineBreaks:!0,tasklists:!0}).makeHtml(e),He=e=>Me()(e,{allowedTags:["h1","h2","h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","img","table","thead","caption","tbody","tr","th","td","pre","iframe","del"],allowedAttributes:{a:["href","name","target"],img:["src"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto"],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:["href","src","cite"],allowProtocolRelative:!0}),Ke=o.default.div`
  .content {
    margin-bottom: 25px;
  }
  .external-docs-link {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 100%;
  }
`,Qe=({groupMetadata:e})=>{const{formatMessage:t}=(0,Ee.Z)();return ke()(e,"description")||ke()(e,"externalDocs.description")&&ke()(e,"externalDocs.url")?i.createElement(ee.Z,{size:"small",onClick:a=>(({e,groupMetadata:t,formatMessage:a})=>{e.preventDefault(),e.stopPropagation();const n=Ge(ke()(t,"description")),r=He(n);$e.Z.info({title:a({id:"description"}),content:i.createElement(Ke,null,i.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:r}}),i.createElement("a",{className:"external-docs-link",href:ke()(t,"externalDocs.url"),target:"_blank",rel:"noopener noreferrer",title:ke()(t,"externalDocs.description")},ke()(t,"externalDocs.description"))),icon:null,maskClosable:!0,centered:!0,okText:a({id:"close"})})})({e:a,groupMetadata:e,formatMessage:t}),type:"link",icon:i.createElement(Le.Z,null)}):null},{extractColorFromTheme:We}=n.Z,Je=o.default.div`
  height: 36px;
  position: relative;
  background-color: ${({selected:e,theme:t})=>We(e?"@okinatako-border-default":"@okinatako-background-secondary",t)};
  .content {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .endpoint-name {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &:hover {
    background-color: ${({theme:e})=>"dark"===(null==e?void 0:e.__name)?"rgba(0,16,37,0.858)":"rgba(226,226,226,0.521)"};
    cursor: pointer;
  }
`,{Panel:Ye}=Te.Z,Xe=({forceExpendAllGroups:e,groupedEndpoints:t,endpointGroups:a,selectedEndpoint:n,handleEndpointSelection:r})=>{const[o,s]=(0,i.useState)(),l=O()(a,"id");let d;if(e){const e=a.reduce(((e,t)=>(e[t.id]=!0,e)),{});d=Object.keys(e)}else d=o||(null!=n&&n.groupId?[n.groupId]:[]);const c=(e=[])=>e.map((e=>i.createElement(Je,{title:e.name,key:e.id,selected:e.id===n.id,onClick:()=>r(e)},i.createElement("div",{className:"content"},i.createElement(Ze,{method:e.method}),i.createElement(Ce.Z,null,i.createElement("span",{title:e.name,className:"endpoint-name"},e.name))))));return i.createElement(Te.Z,{expandIcon:({isActive:e,header:t})=>{var a;const n="string"==typeof(null===(a=t.props)||void 0===a?void 0:a.children)?`, group: ${t.props.children}`:"";return e?i.createElement(je.Z,{"aria-label":`collapse endpoints list${n}`}):i.createElement(Oe.Z,{"aria-label":`expand endpoints list${n}`})},activeKey:d,onChange:e=>{if(e&&((null==e?void 0:e.length)>(null==o?void 0:o.length)||!o)){const t=De()(e,o);if(1===t.length){const e=t[0],a=document.getElementById(`collapse_panel_${e}`);a&&setTimeout((()=>{const{parentElement:e}=a;e.scrollHeight<=e.clientHeight||a.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}),300)}}s(e)},className:"endpoints-list-collapse"},t.map((e=>(e=>{if(null==e||!e.items)return null;const t=ke()(l,e.id);return e.id?i.createElement(Ye,{className:"endpoints-panel",key:e.id,id:`collapse_panel_${e.id}`,header:i.createElement("span",{className:"group-name"},null==t?void 0:t.name),extra:i.createElement(Qe,{groupMetadata:t})},c(e.items)):c(e.items)})(e))))},et=i.memo(Xe),{extractColorFromTheme:tt}=n.Z,at=o.default.div`
  height: 100%;
`,nt=o.createGlobalStyle`
color: ${({theme:e})=>tt("@okinatako-content-primary",e)};
.endpoints-panel .ant-collapse-content-box {
  padding: 0 !important;
}

.endpoints-list-collapse {
  background-color: ${({theme:e})=>tt("@okinatako-background-primary",e)};
  height: calc(100% - 60px);
  overflow-x: hidden;
  & .ant-collapse-header {
    background-color: ${({theme:e})=>tt("@okinatako-background-secondary",e)};
    margin-left: -7px;
  }
}

.endpoints-panel .group-name {
  display: inline-block;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  padding-bottom: 3px;
}
`,{extractColorFromTheme:it}=n.Z,rt=o.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  padding: 10px 15px;
  height: 60px;
  color: ${({theme:e})=>it("@okinatako-content-primary",e)};
  background-color: ${({theme:e})=>it("@okinatako-background-secondary",e)};
  border-bottom: 1px solid ${({theme:e})=>it("@okinatako-border-default",e)};
`,ot=function({children:e}){return i.createElement(rt,null,e)};var st=a(50361),lt=a.n(st);const dt="string",ct="enum",pt="array",ut="geopoint (latitude, longitude)",mt="gateway",gt="json",vt="oauth2",ht="authheader",kt="gqlquery",ft="gqlvariables",bt="gqlheaders",yt="header",_t=["basic","oauth2"];function wt(e){return{...e,examples:Object.entries(ke()(e,"examples")||{}).map((([t,a])=>({...a,value:"object"==typeof a.value?JSON.stringify(a.value):a.value,id:`${e.name||""}.${t||""}`.toLocaleLowerCase().replace(/\s/g,"_"),name:t})))}}function xt(e){const t=lt()(e);return t.endpoints=ke()(t,"endpoints",[]).map((e=>{const a=lt()(e);if(a.groupId=a.group||null,delete a.group,a.parameters||(a.parameters=[]),t.authentication){var n,i;const e=[],o=[];if(null!==(n=t.authentication)&&void 0!==n&&n.authParams.length){var r;const a=((null===(r=t.authentication)||void 0===r?void 0:r.authType)||"").toLowerCase();t.authentication.authParams.forEach((t=>{"header"===a?e.push({...t,parameterType:"HEADER",valueType:ht,condition:"required"}):"query"===a&&o.push({...t,parameterType:"QUERY",querystring:!0,valueType:dt,condition:"required"})}))}const s=((null===(i=t.authentication)||void 0===i?void 0:i.authType)||"").toLowerCase();_t.includes(s)&&e.push({...t.authentication,parameterType:"HEADER",valueType:t.authentication.authType,condition:"required",name:"Authorization"}),a.parameters.unshift(...e,...o)}t.payloads.filter((e=>e.id===a.payload||e.id!==a.response&&e.apiendpoint===a.id&&!e.name)).forEach((e=>{const t=lt()(e);t.parameterType="PAYLOAD",t.valueType=t.format,t.value=t.body,delete t.format,delete t.body,delete t.payload,a.parameters.push(t)}));const o=ke()(a,"params.parameters",[]).map((e=>{const t=lt()(e);switch(t.value=t.value||"",t.valueType=t.paramType,delete t.paramType,t.type){case"routeparameter":t.parameterType=t.querystring?"QUERY":"PATH";break;case"headerparameter":t.parameterType="HEADER";break;default:t.parameterType="BODY"}return t}));return delete a.params,a.parameters=a.parameters.concat(o),a.parameters=a.parameters.map((e=>wt(e))),a.requestPayloads=a.requestPayloads.map((e=>wt(e))),a.responsePayloads=a.responsePayloads.map((e=>wt(e))),a})),delete t.payloads,t}const Et=(e,t)=>Number.isInteger(e.index)?e.index-t.index:e.createdAt<t.createdAt,At=(e,t)=>Number.isInteger(e.index)?Number.isInteger(t.index)?e.index-t.index:-1:1,Nt=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},It={kind:"Document",definitions:Nt([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"apiVersion"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apiVersionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiVersion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"apiVersionId"},value:{kind:"Variable",name:{kind:"Name",value:"apiVersionId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ApiVersionTargetUrls"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"Endpoints"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"Authentication"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ApiPayloads"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ApiGroups"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"PublicDns"},directives:[]}]}}]}}].concat([{kind:"FragmentDefinition",name:{kind:"Name",value:"Endpoints"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiVersion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endpoints"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingArgs"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"-1"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"index"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"method"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"route"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isGraphQL"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endpointPath"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"externalDocs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"graphQLSchema"},arguments:[{kind:"Argument",name:{kind:"Name",value:"withOverrides"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"params"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"parameters"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"appliedOauth2Scopes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"responsePayloads"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingArgs"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"-1"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"statusCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apiendpoint"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"examples"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"requestPayloads"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingArgs"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"-1"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apiendpoint"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"examples"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]}]}}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"Authentication"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiVersion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authentication"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"authType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accessTokenUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"handleOauthTokenAtFrontend"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"clientSecretRequired"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"separator"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"authorizationUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"oauthTokenUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"requestTokenUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grantType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"clientAuthentication"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"authParams"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"ApiPayloads"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiVersion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"payloads"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingArgs"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"-1"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"statusCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apiendpoint"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"examples"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"ApiGroups"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiVersion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"groups"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"index"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalDocs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublicDns"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiVersion"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"publicdns"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"proxyMode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"current"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],f)),loc:{start:0,end:223,source:{body:"\nquery apiVersion($apiVersionId: ID!){\n  apiVersion(apiVersionId: $apiVersionId) {\n    id\n    ...ApiVersionTargetUrls,\n    ...Endpoints\n    ...Authentication\n    ...ApiPayloads\n    ...ApiGroups\n    ...PublicDns\n  }\n}\n\n\n\n\n\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var St=a(94654),Pt=a.n(St),Ft=a(14293),Ct=a.n(Ft),qt=a(7739),Dt=a.n(qt);const Tt=(e,t)=>{const a=O()(t,"id"),n=Dt()(e,"groupId"),i=Pt()(n,((e,t)=>Ct()(a[t])?e:[])),r=(null==t?void 0:t.map((e=>({id:e.id,items:n[e.id]}))))||[];return T()(i)||r.unshift({items:i}),r},jt=({billingFeatures:e,selectedEndpointIdByHost:t,selectedEndpoint:a,handleEndpointSelection:n})=>{const{selectedVersion:r}=(0,i.useContext)(S),[o,s]=(0,i.useState)(void 0);function l(e,t){const a=[];return(e||[]).forEach((e=>{a.includes(e.groupId)||a.push(e.groupId)})),(t||[]).sort(At).filter((e=>a.includes(e.id)))}function d(t){const a=e.reduce(((e,t)=>(ke()(t,"billingfeatureendpoints",[]).forEach((a=>{e[a.endpointHash]||(e[a.endpointHash]={}),e[a.endpointHash][t.id]=t.id})),e)),{});return(t||[]).map((e=>({...e,restrictedForFeatures:a[e.endpointHash]}))).sort(Et)}const{loading:c,error:p,data:u,previousData:m}=(0,v.a)(It,{variables:{apiVersionId:r.id},onCompleted:e=>{var a;const{apiVersion:i}=e,{groups:r,endpoints:o}=xt({...i}),s=d(o),c=l(s,r),p=Tt(s,c),u=s.find((e=>e.id===t)),m=u||(null===(a=p[0])||void 0===a?void 0:a.items[0])||{};n(m)}});if(c&&!m)return i.createElement(xe,{loading:!0});if(p)throw p;const{apiVersion:g}=c?m:u,{groups:h,endpoints:k}=xt({...g}),f=d(k);let b=f;o&&f&&(b=f.filter((e=>e.name.toLowerCase().includes(o.toLowerCase()))));const y=l(f,h),_=Tt(b,y);return i.createElement(fe.Z,{spinning:c,size:"large"},i.createElement(at,{"data-id":"endpoints-section"},i.createElement(nt,null),i.createElement(ot,null,i.createElement(Fe,{searchQuery:o,setSearchQuery:s})),(null==f?void 0:f.length)>0&&i.createElement(et,{forceExpendAllGroups:!!o,groupedEndpoints:_,endpointGroups:y,selectedEndpoint:a,handleEndpointSelection:n})))};var Ot=a(18446),Vt=a.n(Ot),zt=a(23279),Zt=a.n(zt),$t=a(48086);const Lt="rapid-api-app",Rt="x-rapidapi-host",Mt="x-rapidapi-key",Bt="gateway-select",Ut="gateway-url",Gt="base-url-select",Ht="query",Kt="operationName",Qt="variables",Wt="headers",Jt="authorization-name-select",Yt="files",Xt="FORM_DATA",ea={JSON:"application/json",XML:"application/xml",TEXT:"text/plain",BINARY:"application/octet-stream",FORM_DATA:"form-data",PLAIN:"plain",HTML:"html"},ta=["JSON","XML","TEXT","BINARY","HTML","PLAIN"],aa=o.default.div`
`,na=function({method:e,name:t}){return i.createElement(aa,{"data-id":"endpoint-header"},i.createElement(Ze,{method:e,size:"large"}),i.createElement(Ce.Z,null,t))},ia=({endpointPath:e})=>{const{description:t,path:a,summary:n}=e||{},r=Ge(t),o=He(r);return T()(e)?null:i.createElement("div",{className:"endpoint-path-metadata"},i.createElement("p",{className:"path"},a),i.createElement("p",{className:"summary"},n),i.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:o}}))},ra=o.default.div``,oa=function({externalDocs:e}){const{description:t,url:a}=e||{};return a?i.createElement(ra,{className:"external-docs-link"},i.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},t)):null},{extractColorFromTheme:sa}=n.Z,la=o.default.div`
  text-size-adjust: 100%;
  width: 100%;
  line-height: 1.5;
  color: ${({theme:e})=>sa("@okinatako-content-primary",e)};
  font-size: ${({fontSize:e})=>e||"16px"};
  font-weight: 400;
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: ${({theme:e})=>sa("@rapid-c",e)};
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  & a {
    color: ${({theme:e})=>sa("@link-color",e)};
    text-decoration: none;
  }

  & a:active,
  & a:hover {
    text-decoration: underline;
    outline-width: 0;
  }
  & a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  & strong {
    font-weight: 600;
    font-weight: bolder;
  }

  & img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: ${({theme:e})=>sa("@code-viewer-bg",e)};
    border-style: none;
  }

  & img[align='right'] {
    padding-left: 20px;
  }

  & img[align='left'] {
    padding-right: 20px;
  }

  & code,
  & kbd,
  & pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  & code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
    color: ${({theme:e})=>sa("@rapid-c",e)};
    padding: 0.2em 0.4em;
    margin: 0;
    background-color:
      ${({theme:e})=>sa("@header-organization-dropdown-item-hover",e)} !important;
    border-radius: 3px;
  }

  & pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    border: 0;
  }

  & pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    border: 0;
  }

  & hr {
    box-sizing: content-box;
    overflow: hidden;
    background: ${({theme:e})=>sa("@white",e)};
    border-bottom: 1px solid ${({theme:e})=>sa("@rapid-d",e)};
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: ${({theme:e})=>sa("@rapid-d",e)};
    border: 0;
  }

  & hr::before {
    display: table;
    content: '';
  }

  & hr::after {
    display: table;
    clear: both;
    content: '';
  }

  & input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  & input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  & * {
    box-sizing: border-box;
  }

  & table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    overflow: auto;
  }

  & td,
  & th {
    vertical-align: middle;
    padding: 0;
  }

  & h2 {
    font-size: 24px;
    font-weight: 600;
  }

  & h3 {
    font-size: 20px;
    font-weight: 600;
  }

  & h4 {
    font-size: 16px;
    font-weight: 600;
  }

  & h5 {
    font-size: 14px;
    font-weight: 600;
  }

  & h6 {
    font-size: 12px;
    font-weight: 600;
  }

  & p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  & blockquote {
    margin: 0;
  }

  & ul {
    list-style-type: disc;
  }

  & ol {
    list-style-type: decimal;
  }

  & ul,
  & ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  & ol ol,
  & ul ol {
    list-style-type: lower-roman;
  }

  & ul ul ol,
  & ul ol ol,
  & ol ul ol,
  & ol ol ol {
    list-style-type: lower-alpha;
  }

  & dd {
    margin-left: 0;
  }

  & pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: ${({theme:e})=>sa("@rapid-d",e)} !important;
    border-radius: 3px;
    word-wrap: normal;
  }

  &::before {
    display: table;
    content: '';
  }

  &::after {
    display: table;
    clear: both;
    content: '';
  }

  & > *:first-child {
    margin-top: 0 !important;
  }

  & > *:last-child {
    margin-bottom: 0 !important;
  }

  & p,
  & blockquote,
  & ul,
  & ol,
  & dl,
  & table,
  & pre {
    color: ${({theme:e})=>sa("@rapid-b",e)};
    margin-top: 0;
    margin-bottom: 16px;
  }

  & blockquote {
    padding: 0 1em;
    color: ${({theme:e})=>sa("@markdown-blockquote-text-color",e)};
    border-left: 0.25em solid ${({theme:e})=>sa("@markdown-blockquote-border-left-color",e)};
  }

  & blockquote > :first-child {
    margin-top: 0;
  }

  & blockquote > :last-child {
    margin-bottom: 0;
  }

  & kbd {
    display: inline-block;
    font-size: 11px;
    padding: 3px 5px;
    font: 11px 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    line-height: 10px;
    color: ${({theme:e})=>sa("@rapid-c",e)};
    vertical-align: middle;
    background-color: ${({theme:e})=>sa("@rapid-d",e)};
    border: solid 1px ${({theme:e})=>sa("@markdown-blockquote-border-left-color",e)};
    border-bottom-color: ${({theme:e})=>sa("@markdown-seperator-a",e)};
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 ${({theme:e})=>sa("@markdown-seperator-a",e)};
  }

  & h1 {
    font-weight: 600;
    margin: 0.67em 0;
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid ${({theme:e})=>sa("@okinatako-border-default",e)};
  }

  & h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid ${({theme:e})=>sa("@okinatako-border-default",e)};
  }

  & h3 {
    padding-bottom: 0.2em;
    font-size: 1.25em;
    border-bottom: 1px solid ${({theme:e})=>sa("@okinatako-border-default",e)};
  }

  & h4 {
    padding-bottom: 0.2em;
    font-size: 1em;
    border-bottom: 1px solid ${({theme:e})=>sa("@okinatako-border-default",e)};
  }

  & h5 {
    font-size: 0.875em;
  }

  & h6 {
    font-size: 0.85em;
  }

  & ul,
  & ol {
    padding-left: 2em;
  }

  & ul ul,
  & ul ol,
  & ol ol,
  & ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  & li {
    word-wrap: break-all;
  }

  & li > p {
    margin-top: 16px;
  }

  & li + li {
    margin-top: 0.25em;
  }

  & dl {
    padding: 0;
  }

  & dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  & dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & table th,
  & table td {
    padding: 6px 13px;
    border: 5px solid ${({theme:e})=>sa("@white",e)};
  }

  & table th {
    text-align: left;
    background-color: ${({theme:e})=>sa("@markdown-blockquote-border-left-color",e)};
    font-weight: 600;
  }

  & table tr {
    background-color: ${({theme:e})=>sa("@rapid-d",e)};
    border-top: 1px solid ${({theme:e})=>sa("@markdown-seperator-a",e)};
  }

  em {
    font-style: italic;
  }
`,da=la;var ca=a(45777),pa=a(92977);const{extractColorFromTheme:ua}=n.Z,ma=o.default.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  color: ${({theme:e})=>ua("@okinatako-content-primary",e)};
`,ga=({description:e,maxCharacters:t=280})=>{const{formatMessage:a}=(0,Ee.Z)(),n=Ge(e),r=He(n),o=ke()(r,"length",0)>t?`${r.slice(0,t)}...`:void 0;return(0,i.useEffect)((()=>()=>{$e.Z.destroyAll()}),[]),i.createElement(ma,null,i.createElement("div",{className:"notranslate",translate:"no",style:{flexBasis:"100%"},dangerouslySetInnerHTML:{__html:o||r}}),o&&i.createElement(ca.Z,{title:a({id:"more-details"})},i.createElement(pa.Z,{style:{alignSelf:"flex-end",fontSize:22,cursor:"pointer"},onClick:()=>{$e.Z.info({width:"60%",centered:!0,maskClosable:!0,title:a({id:"description"}),content:i.createElement("div",{style:{maxHeight:450,overflowY:"auto"}},i.createElement(da,null,i.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))})}})))},{extractColorFromTheme:va}=n.Z,ha=o.default.div`
  padding: 10px 15px;
  font-size: 14px;
  border-bottom: 1px solid ${({theme:e})=>va("@okinatako-border-default",e)};
  color: ${({theme:e})=>va("@okinatako-content-primary",e)};
`,ka=({selectedEndpoint:e})=>{const{description:t,externalDocs:a,endpointPath:n}=e;return i.createElement(ha,{"data-id":"endpoint-description"},i.createElement(da,null,i.createElement(ga,{description:t}),i.createElement(oa,{externalDocs:a}),i.createElement(ia,{endpointPath:n})))};var fa=a(80486);const{extractColorFromTheme:ba}=n.Z,ya=o.default.div`
  .ant-select {
    width: 350px !important;
    border: 1px solid ${({theme:e})=>ba("@okinatako-border-default",e)};
    border-radius: 5px;
    padding: 10px 0;
  }
  .button {
    text-align: left;
    padding: 0;
  }
  .button-text {
    margin-right: 8px;
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${({theme:e})=>ba("@rapid-b",e)};
  }
`,_a=function({contextSelectData:e}){const{context:t,setContext:a}=(0,i.useContext)(u),{api:n,userContextTree:r,userInfo:o}=e,s=A("teamContext.svg"),l=E("showMultipleOrganizations"),d=x("FFCreateNewOrganizationContextDropDown"),p=null==r?void 0:r.context,{context:m,shouldHidePersonalUser:g}=G({user:o,api:n,contextTree:p}),v=function(e,t){const a={};return e&&Object.keys(e).forEach((n=>{const i=e[n],r=i.thumbnail;a[n]={...e[n],children:{}},Object.values(i.children||{}).forEach((e=>{const i=e.thumbnail||r||t;a[n].children[e.id]={...e,thumbnail:i}}))})),a}(m,s),h=l&&x("FFCreateNewOrganizationContextDropDown")&&(!(k=o.id)||L.AccessControlClient.getPermission({userId:k},["CREATE_ORGANIZATION"]).granted)&&d;var k;const f=g||!M(o.id);return i.createElement(ya,{"data-id":"context-dropdown-select"},i.createElement(fa.Z,{contextTree:v,onChange:e=>{(0,c.WI)("contextSelection",e);const t=Number(e.entityId||e.id||e.key);a({activeContextId:t})},contextDepth:"Team",showOrgBtn:h,selected:t.activeContextId,userInfo:o,hideUser:f}))};var wa=a(27049),xa=a(50319),Ea=a(44012),Aa=a(16579);const Na=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},Ia={kind:"Document",definitions:Na([{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addProjectV2"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AddProjectInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addProjectV2"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProjectFields"},directives:[]}]}}]}}].concat(y.definitions)),loc:{start:0,end:123,source:{body:"\n  mutation addProjectV2($input: AddProjectInput!) {\n    addProjectV2(input: $input) {\n      ...ProjectFields\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var Sa=a(42579);const{extractColorFromTheme:Pa}=n.Z,Fa=o.default.div`
  display: flex;
  flex-wrap: wrap;
  .button {
    text-align: left;
    padding: 0;
  }
  .button-text {
    margin-right: 8px;
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${({theme:e})=>Pa("@rapid-b",e)};
  }
`,Ca=(0,o.default)(Sa.Z).attrs((({theme:e})=>({twoToneColor:Pa("@primary-color",e)})))`
  font-size: 16px;
`,qa=(o.default.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 16px;
    color: ${({theme:e})=>e.txtDarkBlue};
  }
`,o.default.div`
  color: ${({theme:e})=>Pa("@okinatako-content-primary",e)};
  .fields {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
  }
  .field-group {
    flex: 1 0 100%;
  }
  label {
    color: ${({theme:e})=>Pa("@okinatako-content-primary",e)};
  }
`),Da=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},Ta={kind:"Document",definitions:Da([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetEntity"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"entityID"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entityById"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"entityID"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"EntityCoreFields"},directives:[]}]}}]}}].concat(k)),loc:{start:0,end:106,source:{body:"\n  query GetEntity($entityID: ID){\n    entityById(id: $entityID) {\n      ...EntityCoreFields\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ja=function({isOpenModal:e,setIsOpenModal:t,selectedVersionName:a,handleCreateNewAppCB:n}){const{context:r}=(0,i.useContext)(u),{formatMessage:o}=(0,Ee.Z)(),[s]=Aa.Z.useForm(),[l,{loading:d}]=(0,xa.D)(Ia,{update:(e,{data:{addProjectV2:t}})=>{const{entityById:a}=e.readQuery({query:Ta,variables:{entityID:r.activeContextId}});e.modify({id:e.identify(a),fields:{projectAcls:a=>[...a,{Project:e.writeFragment({data:t,fragment:y,fragmentName:"ProjectFields"}),__typename:"ProjectInfo"}]}})}});async function c(){const{appName:e}=await s.validateFields(),a={projectOwner:r.activeContextId,projectName:e},{data:i}=await l({variables:{input:a}});n(i.addProjectV2.mashapeId),t(!1)}const p=()=>{t(!1)},m=[i.createElement(ee.Z,{className:"capitalize",key:"cancel",onClick:p},i.createElement(Ea.Z,{id:"cancel"})),i.createElement(ee.Z,{className:"capitalize",key:"submit",loading:d,onClick:c,type:"primary"},i.createElement(Ea.Z,{id:"add-new-app"}))];return i.createElement($e.Z,{open:e,size:"medium",destroyOnClose:!0,title:i.createElement(Ea.Z,{id:"add-new-app"}),onCancel:p,footer:m,zIndex:2e3},i.createElement(Aa.Z,{form:s,layout:"vertical",name:"createAppForm"},i.createElement(qa,null,i.createElement("span",null,o({id:"create_new_app_message"},{versionName:a,strong:e=>i.createElement("strong",null,e)})),i.createElement("div",{className:"fields"},i.createElement("div",{className:"field-group"},i.createElement(Aa.Z.Item,{preserve:!1,label:i.createElement(Ea.Z,{id:"app-name"}),name:"appName",rules:[{required:!0,min:3,message:o({id:"enter-app-name-error"})}]},i.createElement(Ae.Z,{onPressEnter:c,autoFocus:!0,placeholder:o({id:"enter-app-name"})})))))))},Oa=function({onSelectedProjectChange:e}){const t=(0,g.useFlags)(),{formatMessage:a}=(0,Ee.Z)(),[n,r]=(0,i.useState)(!1);return i.createElement(Fa,null,i.createElement(ee.Z,{type:"text",size:"small",className:"button",block:!0,icon:i.createElement(Ca,null),onClick:()=>{t.accessProvisioning?window.open("/developer/new","_blank","noopener,noreferrer"):r(!0)}},i.createElement("span",{className:"button-text"},a({id:"add-new-app"}))),i.createElement(ja,{isOpenModal:n,setIsOpenModal:r,handleCreateNewAppCB:e}))};var Va=a(39693),za=a.n(Va),Za=a(39505);function $a(){return $a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},$a.apply(this,arguments)}const{Option:La}=Za.Z,Ra=({disabled:e,value:t,examples:a={},onChange:n,...r})=>{const{formatMessage:o}=(0,Ee.Z)(),[s,l]=(0,i.useState)(),d=!T()(a);return i.createElement(Ae.Z.Group,{compact:!0},d&&i.createElement(Za.Z,{style:{width:"40%"},optionLabelProp:"label",dropdownMatchSelectWidth:!1,value:s,placeholder:o({id:"select-example"}),onChange:e=>{const t=a.find((t=>t.name===e));l(t.name),n(null==t?void 0:t.value)},getPopupContainer:e=>e.parentElement},a.map((e=>{const{summery:t,name:a,id:n}=e,r=t?`${a}: ${t}`:a;return i.createElement(La,{key:n,value:a,label:a},i.createElement(Ce.Z,null,r))}))),i.createElement(Ae.Z,$a({style:{width:d?"60%":"100%"},value:t,disabled:e,onChange:e=>{s&&l(void 0),n(e)}},r)))};function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ma.apply(this,arguments)}const{Option:Ba,OptGroup:Ua}=Za.Z,Ga=({options:e,required:t,disabled:a,...n})=>{const{formatMessage:r}=(0,Ee.Z)();if(!e)return null;const o=e.reduce(((e,t)=>("object"==typeof t?e.push(t):"string"==typeof t&&e.push({name:t,value:t}),e)),[]);return t||o.push({name:r({id:"do-not-include-in-request"}),value:null}),i.createElement(Za.Z,Ma({disabled:a,getPopupContainer:e=>e.parentElement,showArrow:!a},n),o.map((e=>e.groupName?i.createElement(Ua,{key:e.groupName,label:e.groupName},(e.items||[]).map((e=>i.createElement(Ba,{key:e.value,value:e.value},i.createElement(Ce.Z,null,e.name))))):i.createElement(Ba,{key:e.value,value:e.value},i.createElement(Ce.Z,null,e.name)))))};var Ha=a(49747);function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ka.apply(this,arguments)}const Qa=e=>i.createElement(Ha.Z,Ka({},e,{style:{width:"100%"}}));function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Wa.apply(this,arguments)}const{Option:Ja}=Za.Z,Ya=({disabled:e,value:t,examples:a,onChange:n,...r})=>{const{formatMessage:o}=(0,Ee.Z)(),s=!T()(a),l=s&&Object.values(a).some((e=>Vt()(e.value,t)));return i.createElement(Ae.Z.Group,{compact:!0},s&&i.createElement(Za.Z,{style:{width:"40%"},optionLabelProp:"label",dropdownMatchSelectWidth:!1,value:l?t:void 0,placeholder:o({id:"select-example"}),onChange:e=>{n(e)},getPopupContainer:e=>e.parentElement},a.map((e=>{const{summery:t,name:a,value:n}=e,r=t?`${a}: ${t}`:a;return i.createElement(Ja,{key:a,value:n,label:a},i.createElement(Ce.Z,null,r))}))),i.createElement(Ae.Z,Wa({style:{width:s?"60%":"100%"},value:t,disabled:e,onChange:n},r)))};var Xa=a(27484),en=a.n(Xa),tn=a(68351);function an(){return an=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},an.apply(this,arguments)}const nn=({value:e,onChange:t,...a})=>{let n;if(e)try{const[t,a]=e.split(":");n=en()().set("hour",t).set("minute",a)}catch(e){n=en()()}return i.createElement(tn.Z,an({value:n,format:"HH:mm",onChange:(e,a)=>{t(a)}},a))};var rn=a(68588);function on(){return on=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},on.apply(this,arguments)}const sn=({value:e,onChange:t,...a})=>{const n=en()(e||en()());return i.createElement(rn.Z,on({value:n,format:"YYYY-MM-DD",style:{width:"100%"},onChange:(e,a)=>{t(a)}},a))};function ln(){return ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ln.apply(this,arguments)}const{Option:dn}=Za.Z,cn=({value:e,...t})=>{const{formatMessage:a}=(0,Ee.Z)();return i.createElement(Za.Z,ln({value:e&&String(e).toLowerCase(),getPopupContainer:e=>e.parentElement},t),i.createElement(dn,{key:"true",value:"true"},i.createElement(Ce.Z,null,"True")),i.createElement(dn,{key:"false",value:"false"},i.createElement(Ce.Z,null,"False")),i.createElement(dn,{key:null,value:null},a({id:"do-not-include-in-request"})))};var pn=a(28042),un=a(60561),mn=a(1058),gn=a(49101),vn=a(99165),hn=a(74855),kn=a.n(hn),fn=a(53918);const bn=e=>{if(!e)return{};if("object"==typeof e)return e;try{return JSON.parse(e)}catch(e){return{error:"something went wrong"}}};var yn=a(7048);const _n=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 20px;
  }
`,wn=({messageID:e})=>{const t=A("embarrassed.svg");return i.createElement(_n,{className:"embarrassing-error"},i.createElement(yn.Z,{height:"300px",src:t,alt:e}),i.createElement(Ea.Z,{id:e}))},{extractColorFromTheme:xn}=n.Z,En=o.default.div`
  position: relative;
  label {
    font-size: 1em !important;
  }
  .x-rapid-required-key {
    &:before {
      content: "*";
      color: ${({theme:e})=>xn("@okinatako-content-error",e)};
      margin-right: 0.25em;
      font-weight: bold;
      user-select: none;
    }
  }
`,An=({src:e,highlightRequired:t})=>{const{formatMessage:a}=(0,Ee.Z)(),n=(0,o.useTheme)(),{err:r,json:s,jsonStr:l,isFullyRenderedInDepth:d,isPrimitive:c,hasKeys:p}=i.useMemo((()=>(e=>{if("string"!=typeof e&&"object"!=typeof e)return{err:i.createElement(wn,{messageID:"invalid-response-object"})};try{const t=bn(e),a=((e,t)=>{const a=(e,t)=>t>=3||(e&&"object"==typeof e?Array.isArray(e)?e.some((e=>a(e,t+1))):Object.values(e).some((e=>a(e,t+1))):t>=3);return a(e,0)})(t),n=null!==t&&"object"!=typeof t,i=!n&&(Array.isArray(t)?t:Object.keys(t)).length>0;return{err:null,json:t,jsonStr:"string"==typeof str?e:JSON.stringify(t,null,2),isFullyRenderedInDepth:!a,isPrimitive:n,hasKeys:i}}catch(e){return{err:i.createElement(wn,{messageID:"invalid-response-object-parsing-error"})}}})(e)),[e]),[u,m]=(0,i.useState)(null),g=null===u&&d,v=i.useMemo((()=>e=>{const[a]=e,{length:n}=e;if(1===n&&"root"===a)return"";const r=!!t&&function(e,t){const[a,n]=t,{length:i}=t;let r=!1;if(1===i&&"root"===a)return null;if("properties"===n){let n=e;if(t.length>3){const a=t.slice(2,-1).reverse();n=ke()(e,a)}const{required:i}=n;Array.isArray(i)&&i.includes(a)&&(r=!0)}else if("number"==typeof a){const a=t.slice(0,-1).reverse(),n=ke()(e,a);!0===(null==n?void 0:n.required)&&(r=!0)}return r}(s,e),o=i.createElement(i.Fragment,null,a,":");return r?i.createElement("span",{className:"x-rapid-required-key"},o):o}),[s]);if(r)return r;const h=i.useMemo((()=>{const e=(e=>({base00:"transparent",base01:ke()(e,"@steps-title-process"),base02:ke()(e,"@border-no  tification"),base03:ke()(e,"@okinatako-background-extra-accent"),base04:ke()(e,"@okinatako-background-extra-accent"),base05:ke()(e,"@text-color"),base06:ke()(e,"@rapid-k2"),base07:ke()(e,"@rapid-k2"),base08:ke()(e,"@text-color"),base09:ke()(e,"@okinatako-content-accent"),base0A:ke()(e,"@rapid-n"),base0B:ke()(e,"@rapid-n"),base0C:ke()(e,"@rapid-n"),base0D:ke()(e,"@okinatako-content-secondary"),base0E:ke()(e,"@okinatako-content-secondary"),base0F:ke()(e,"@rapid-n")}))(n);return{extend:e,tree:{fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:12},arrow:({style:e})=>({style:{...e,height:12,lineHeight:1,display:"inline-block",verticalAlign:"middle"}}),nestedNodeLabel:({style:e})=>({style:{...e,userSelect:"text",cursor:"pointer"}}),nestedNodeItemString:({style:t},a,n,i)=>({style:{...t,padding:0,cursor:"pointer",color:i?e.base06:e.base03,opacity:.75}})}}),[n]),k=i.useCallback(((e,t,a)=>null===u?a<2:!!u||0===a),[u]);return i.createElement(En,null,i.createElement("div",{style:{position:"absolute",right:25,zIndex:1,transform:"scale(0.8)"}},!c&&p&&i.createElement(ee.Z,{onClick:()=>m(!g&&(e=>!e)),type:"text",size:"small",icon:u??g?i.createElement(mn.Z,null):i.createElement(gn.Z,null)},a({id:u??g?"collapse-all":"expand-all"})),i.createElement(kn(),{text:l,onCopy:()=>$t.ZP.success(a({id:"copied-to-clipboard"}))},i.createElement(ee.Z,{size:"small",type:"text",icon:i.createElement(vn.Z,null)},a({id:"copy"})))),i.createElement("div",{className:"notranslate",translate:"no",style:{position:"relative"}},i.createElement(fn.L,{theme:h,invertTheme:!1,collectionLimit:2,labelRenderer:v,shouldExpandNode:k,data:s})))},Nn=i.memo(An);var In=a(19830),Sn=a.n(In);const Pn=e=>{if(!e)return e;try{return Sn()(e)}catch(t){return e}},{extractColorFromTheme:Fn}=n.Z,Cn=o.default.div`
  display: flex;
  flex-flow: row nowrap;
  .label {
    max-width: 28%;
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      margin-top: 7px;
      opacity: 0.5;
      text-transform: uppercase;
    }
    .meta-fields {
      color: ${({theme:e})=>Fn("@generate-org-wiz-step-text",e)};
      margin-top: 8px;
      font-size: 12px;
      font-weight: normal;
      width: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      p {
        margin-bottom: 2px;
        word-break: break-word;
      }
    }
  }
  .parameter {
    flex-basis: 70%;
    max-width: 70%;
    margin-left: auto;
    &.full-width {
      margin-left: 0;
      flex-basis: 100%;
      max-width: 100%;
    }
    &.hidden {
      display: none;
    }
    .extra {
      display: flex;
    }
    .extra .condition {
      text-transform: uppercase;
      margin-right: 10px;
      font-size: 12px;
      color: ${({theme:e})=>Fn("@steps-title-process",e)};
    }
    .extra .description {
      color: ${({theme:e})=>Fn("@rapid-b",e)};
    }
    .example-summary {
      margin-bottom: 10px;
      &.hidden {
        visibility: hidden;
      }
    }

    .monaco-editor {
      border: 1px solid ${({theme:e})=>Fn("@okinatako-border-default",e)};
      border-radius: 2px;
    }

    .monaco-editor,
    .monaco-editor-background,
    .monaco-editor .inputarea.ime-input,
    .monaco-editor .margin {
      background-color: transparent;
    }
  }
  textarea {
    display: block;
    margin-top: 12px;
  }
`,qn=o.default.div`
  overflow-y: auto;
  height: 300px;
  border: 1px solid ${({theme:e})=>Fn("@okinatako-border-default",e)};
  border-radius: 2px;
`;function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Dn.apply(this,arguments)}const{Option:Tn}=Za.Z,{TabPane:jn}=un.Z,On={selectOnLineNumbers:!0,minimap:{enabled:!1},scrollbar:{verticalScrollbarSize:10,alwaysConsumeMouseWheel:!1},folding:!0,colorDecorators:!0,contextmenu:!0,renderFinalNewline:!1,lineDecorationsWidth:10,smoothScrolling:!0,wordWrap:"on",scrollBeyondLastLine:!1,scrollBeyondLastColumn:!1,tabCompletion:!0,tabSize:4,lineNumbersMinChars:2},Vn=({language:e,examples:t,description:a,schema:n,value:r,theme:o,onChange:s,...l})=>{const{search:d}=window.location,c=new URLSearchParams(d).get("mode"),{formatMessage:p}=(0,Ee.Z)(),u=(0,i.useRef)(),m=!T()(t)&&t.length>0,[g,v]=(0,i.useState)(void 0),h=e=>{const t="object"==typeof e?JSON.stringify(e):e;s(t)},k=Zt()(h,300);function f(e){e&&setTimeout((()=>{e.getAction("editor.action.formatDocument").run()}),500)}(0,i.useEffect)((()=>{!function(){const e=u.current;e&&e.layout()}()})),(0,i.useEffect)((()=>{m&&!g&&v(t[0])}),[]),(0,i.useEffect)((()=>{g&&h(g.value);const e=u.current;e&&f(e)}),[g]);const b=i.useMemo((()=>Pn(bn(n))),[n]);return i.createElement("div",null,i.createElement(ga,{description:a,maxCharacters:280}),m&&i.createElement(Za.Z,{style:{maxWidth:350,fontSize:14},dropdownMatchSelectWidth:!1,value:g&&g.id,placeholder:p({id:"select-example"}),onChange:(e,t)=>{const{example:a}=t;v(a)},getPopupContainer:e=>e.parentElement},t.map((e=>i.createElement(Tn,{key:e.name,value:e.id,example:e},i.createElement(Ce.Z,null,e.name))))),i.createElement(un.Z,{animated:!1,destroyInactiveTabPane:!0},i.createElement(jn,{tab:p({id:"body"}),key:"body",className:"editor"},(null==g?void 0:g.summary)&&i.createElement("div",{className:"example-summary "+(g?"":"hidden")},i.createElement(Ce.Z,null,(null==g?void 0:g.summary)||"no selected example")),i.createElement("div",{className:"notranslate",translate:"no"},i.createElement(pn.ZP,Dn({language:e,height:"300px",width:"100%",options:On,value:"object"==typeof r?JSON.stringify(r,null,""):r,editorDidMount:async(e,t)=>{u.current=t,t.onDidChangeModelContent((()=>{const e=t.getValue();k(e)})),f(t)},theme:"dark"===c?"vs-dark":"vs"},l)))),i.createElement(jn,{tab:p({id:"schema"}),key:"schema"},(null==g?void 0:g.summary)&&i.createElement("div",{className:"example-summary "+(g?"":"hidden")},i.createElement(Ce.Z,null,(null==g?void 0:g.summary)||"no selected example")),i.createElement(qn,null,i.createElement(Nn,{src:b,highlightRequired:!0})))))};var zn=a(71230),Zn=a(15746);const $n=({disabled:e,value:t,onChange:a})=>{const{formatMessage:n}=(0,Ee.Z)(),[r]=Aa.Z.useForm(),[o,s]=(0,i.useState)(!1),[l,d]=(0,i.useState)(void 0),[c,p]=(0,i.useState)(void 0);return i.createElement(i.Fragment,null,i.createElement(Ae.Z.Group,null,i.createElement(zn.Z,{style:{flexFlow:"row nowrap"}},i.createElement(Zn.Z,{span:16,style:{flexShrink:1}},i.createElement(Ae.Z,{value:t,disabled:e})),i.createElement(Zn.Z,{span:8,style:{maxWidth:"unset",fontSize:13,fontWeight:"bold"}},i.createElement(ee.Z,{block:!0,type:"primary",onClick:()=>s(!0)},n({id:"authenticate"}))))),i.createElement($e.Z,{title:"Authorization",open:o,onOk:r.submit,onCancel:()=>{r.resetFields(),s(!1)},okButtonProps:{disabled:!l||!c}},i.createElement(Aa.Z,{form:r,onFinish:e=>{const t=btoa(`${e.basic_auth_u}:${e.basic_auth_p}`);a(`Basic ${t}`),r.resetFields(),s(!1)},onFieldsChange:(e,t)=>{d(ke()(t,[0,"value"])),p(ke()(t,[1,"value"]))}},i.createElement(Aa.Z.Item,{label:"Username",name:"basic_auth_u",rules:[{required:!0,message:n({id:"username-required"})}]},i.createElement(Ae.Z,null)),i.createElement(Aa.Z.Item,{label:"Password",name:"basic_auth_p",rules:[{required:!0,message:n({id:"password-required"})}]},i.createElement(Ae.Z.Password,null)))))};var Ln=a(17563),Rn=a(76772),Mn=a(9676),Bn=a(90890),Un=a(9669),Gn=a.n(Un),Hn=a(36977),Kn=a.n(Hn);const Qn="CLIENT_CREDENTIALS",Wn=(e,t,a)=>"BODY"===e?{client_id:t,client_secret:a}:{};function Jn({event:e,properties:t,options:a,callback:n}){window.analytics&&window.analytics.track(e,t,a,n)}var Yn=a(66252);const Xn=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},ei={kind:"Document",definitions:Xn([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetEntity"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"entityID"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entityById"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"entityID"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"EntityCoreFields"},directives:[]}]}}]}}].concat(k)),loc:{start:0,end:106,source:{body:"\n  query GetEntity($entityID: ID){\n    entityById(id: $entityID) {\n      ...EntityCoreFields\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ti=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},ai={kind:"Document",definitions:ti([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetApiByIdAndVersionId"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apiId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"api"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"apiId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ApiCoreFields"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ApiOwnerDataFields"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"BillingPlans"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"BillingFeatures"},directives:[]}]}}]}}].concat([{kind:"FragmentDefinition",name:{kind:"Name",value:"ApiCoreFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Api"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"allowedContext"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ownerId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slugifiedName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pricing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gateways"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"ApiOwnerDataFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Api"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ownerId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slugifiedName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"BillingPlans"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Api"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"billingPlans"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"legalDocumentId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"legalAccountId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shouldRequestApproval"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pricing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"enablebillingfeatures"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],[{kind:"FragmentDefinition",name:{kind:"Name",value:"BillingFeatures"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Api"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"billingFeatures"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billingfeatureendpoints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endpoint"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endpointHash"},arguments:[],directives:[]}]}}]}}]}}])),loc:{start:0,end:165,source:{body:"\nquery GetApiByIdAndVersionId($apiId: ID!) {\n  api(id: $apiId) {\n    ...ApiCoreFields\n    ...ApiOwnerDataFields\n    ...BillingPlans\n    ...BillingFeatures\n  }\n}\n\n\n\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},{search:ni}=window.location,ii=new URLSearchParams(ni).get("apiId"),ri=function(e){try{if(e){const t=(0,Yn.x)(),{entityById:a}=t.cache.readQuery({query:ei,variables:{entityID:e}}),{api:n}=t.cache.readQuery({query:ai,variables:{apiId:ii}});return{api_id:n.id,api_name:n.name,api_slugified_name:n.slugifiedName,owner:{id:n.owner.id,name:n.owner.name,email:n.owner.email,slugifiedName:n.owner.slugifiedName},context:{id:a.id,name:a.name,slugifiedName:a.slugifiedName,email:a.email}}}throw new Error("No activeContextId supplied to useCommonSegmentParams")}catch(e){return{}}},oi=o.default.div`
  .oauth-data {
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    word-break: normal;
    overflow-wrap: anywhere;
  }
`,si=["redirectUrl","authorizationUrl","accessTokenUrl","clientAuthentication","grantType","separator"],li=({id:e,disabled:t,value:a,onChange:n,...r})=>{var o,s;const{context:l}=(0,i.useContext)(u),d=ri(l.activeContextId),[c]=Aa.Z.useForm(),{formatMessage:p}=(0,Ee.Z)(),[m,g]=(0,i.useState)(!1),[v,h]=(0,i.useState)(!1),[k,f]=(0,i.useState)(!1),[b,y]=(0,i.useState)(null),_=`${window.location.origin}/gateway/oauth/callback`;(0,i.useEffect)((()=>{if("undefined"!=typeof window){const e=window.document.referrer?Ln.parse(new URL(window.document.referrer).search):Ln.parse(window.location.search);null!=e&&e.accessToken&&n(null==e?void 0:e.accessToken)}}),[]),(0,i.useEffect)((()=>{if(r.authValues){const{clientId:e,clientSecret:t}=r.authValues;h(!0),c.setFieldsValue({o_auth_cid:e,o_auth_csec:t})}else h(!1),c.setFieldsValue({o_auth_cid:"",o_auth_csec:""})}),[r.authValues]);const w=r.appliedOauth2Scopes.map((e=>e.name)),x=!!w.length;return i.createElement(i.Fragment,null,i.createElement(Ae.Z.Group,null,i.createElement(zn.Z,{style:{flexFlow:"row nowrap"}},i.createElement(Zn.Z,{span:16,style:{flexShrink:1}},i.createElement(Ae.Z,{id:e,value:a,disabled:t})),i.createElement(Zn.Z,{span:8,style:{maxWidth:"unset",fontSize:13,fontWeight:"bold"}},i.createElement(ee.Z,{block:!0,type:"primary",onClick:()=>{if(g(!0),Object.keys(d).length){const{api_id:e,api_name:t,owner:{id:a,name:n}}=d;Jn({event:"get_token",properties:{category:"API Page",api_id:e,api_name:t,user_id:a,user_name:n}})}}},p({id:"get-token"}))))),i.createElement($e.Z,{width:800,title:"OAuth2 Authorization",open:m,onOk:c.submit,onCancel:()=>{c.resetFields(),g(!1),y(null)},okText:"Authorize",okButtonProps:{disabled:!v,loading:k}},i.createElement(oi,null,b&&i.createElement(Rn.Z,{type:"error",message:`Couldn't authorize. ${b}`,showIcon:!0,icon:i.createElement(Bn.Z,null),closable:!0,onClose:()=>y(null),style:{marginBottom:"24px"}}),i.createElement(Aa.Z,{initialValues:{o_auth_scope:w,o_auth_cid:null===(o=r.authValues)||void 0===o?void 0:o.clientId,o_auth_csec:null===(s=r.authValues)||void 0===s?void 0:s.clientSecret},form:c,onFinish:async e=>{var t;let a=200;f(!0),y(null);const{grantType:i,handleOauthTokenAtFrontend:o,separator:s}=r,l={...r,redirectUrl:_,clientId:null==e?void 0:e.o_auth_cid,clientSecret:null==e?void 0:e.o_auth_csec,scope:null==e||null===(t=e.o_auth_scope)||void 0===t?void 0:t.join("COMMA"===s?",":" "),shouldRedirect:!1};try{let e;var p;if(e=o&&i===Qn?await(async e=>{const{clientId:t,clientSecret:a,accessTokenUrl:n,clientAuthentication:i,redirectUrl:r,authorizationUrl:o,scope:s}=e,l=new(Kn())({clientId:t,clientSecret:a,accessTokenUri:n,authorizationUri:o,redirectUri:r,body:{...Wn(i,t,a),scope:s}});return{accessToken:(await l.credentials.getToken()).accessToken}})(l):await(async e=>(await Gn().request({url:"/gateway/oauth/start",method:"POST",headers:{useQueryString:!0,"x-rapidapi-ua":"RapidAPI-Playground"},data:e})).data)(l),l.grantType===Qn)n(`Bearer ${null===(p=e)||void 0===p?void 0:p.accessToken}`);else if("AUTHORIZATION_CODE"===l.grantType){var u;window.parent.open(null===(u=e)||void 0===u?void 0:u.authUrl,"_blank")}$t.ZP.open({type:"success",content:"Access token created and added to “Authorization” header",style:{marginTop:"92vh"},duration:3}),g(!1),c.resetFields()}catch(e){var m,v;a=(null===(m=e.response)||void 0===m?void 0:m.status)||500,y((null===(v=e.response)||void 0===v?void 0:v.data)||e.message)}f(!1);const{api_id:h,api_name:k,owner:{id:b,name:w}}=d||{owner:{}};var x,E,A;Jn({event:"token_retrieval_attempted",properties:{category:"API Page",response_code:a,user_saved_auth:(x=l,(null===(E=r.authValues)||void 0===E?void 0:E.clientId)===x.clientId&&(null===(A=r.authValues)||void 0===A?void 0:A.clientSecret)===x.clientSecret),api_id:h,api_name:k,user_id:b,user_name:w}})},onFieldsChange:(e,t)=>{var a,n;const i=null===(a=t[0])||void 0===a?void 0:a.value,r=null===(n=t[1])||void 0===n?void 0:n.value,o=i&&r;!o&&v?h(!1):o&&!v&&h(!0)}},i.createElement(Aa.Z.Item,{className:"notranslate",translate:"no",labelAlign:"left",labelCol:{span:6},label:"Client ID",name:"o_auth_cid",rules:[{required:!0,message:p({id:"client-id-required"})}]},i.createElement(Ae.Z,null)),i.createElement(Aa.Z.Item,{className:"notranslate",translate:"no",labelAlign:"left",labelCol:{span:6},label:"Client Secret",name:"o_auth_csec",rules:[{required:r.clientSecretRequired,message:p({id:"client-secret-required"})}]},i.createElement(Ae.Z.Password,null)),!!(ke()(r,"authParams")||[]).length&&i.createElement(i.Fragment,null,i.createElement("div",null,"Scope"),i.createElement(Aa.Z.Item,{name:"o_auth_scope"},i.createElement(Mn.Z.Group,null,(ke()(r,"authParams")||[]).map((e=>i.createElement(zn.Z,{key:e.id},i.createElement(Mn.Z,{disabled:x,value:e.name},i.createElement(Ce.Z,null,e.name))))))))),i.createElement("div",{className:"oauth-data"},i.createElement(zn.Z,null,i.createElement(Zn.Z,{span:8,className:"key"},"redirectUrl"),i.createElement(Zn.Z,{span:16,className:"value"},_)),si.reduce(((e,t)=>{if(null!=r&&r[t]){const a=i.createElement(zn.Z,{key:t},i.createElement(Zn.Z,{span:8,className:"key"},i.createElement(Ce.Z,null,t)),i.createElement(Zn.Z,{span:16,className:"value"},i.createElement(Ce.Z,null,r[t])));e.push(a)}return e}),[])))))},di=({onChange:e,readAsArrayBuffer:t})=>i.createElement(Ae.Z,{type:"file",onChange:a=>{const n=new FileReader,i=a.currentTarget.files[0];i?(t?n.readAsArrayBuffer(i):n.readAsDataURL(i),n.onloadend=()=>{const a=ke()(i,"type"),r=ke()(i,"name");"string"==typeof a&&a.startsWith("image")&&!t&&function(e,t,a=.6){return new Promise(((n,i)=>{const r=document.createElement("canvas"),o=document.createElement("img");o.onload=()=>{r.width=o.width,r.height=o.height,r.getContext("2d").drawImage(o,0,0),n(r.toDataURL(t.type,a))},o.onerror=e=>{i(e)},o.src=e}))}(n.result,i).then((t=>e({fileName:r,fileType:a,data:t,file:i}))),e({fileName:r,fileType:a,data:n.result,file:i})}):e({})}});function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ci.apply(this,arguments)}const{Option:pi}=Za.Z,ui=({options:e,required:t,disabled:a,onChange:n,...r})=>e?i.createElement(Za.Z,ci({disabled:a,onChange:e=>{n(e)},getPopupContainer:e=>e.parentElement},r),e.map((e=>i.createElement(pi,{key:e.value,value:e.value,data:null==e?void 0:e.data},i.createElement(Ce.Z,null,e.name))))):null;var mi=a(84275),gi=a(94295);const vi=({onChange:e})=>{const t=(0,i.useRef)(),{formatMessage:a}=(0,Ee.Z)();return i.createElement(i.Fragment,null,i.createElement("h3",null,a({id:"gql-query"})),i.createElement(Aa.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>ke()(e,"query")!==ke()(t,"query")},(({getFieldValue:a,setFieldsValue:n})=>i.createElement(gi.QueryEditor,{height:190,onChange:i=>{!function(a,n,i){if(n!==a){let n;try{const e=(0,mi.Qc)(a);n=ke()(e,"definitions[0].name.value")}catch{n=""}e(a),t.current!==n&&(t.current=n,i({[Kt]:n}))}}(i,a("query"),n)}}))))},hi=({onChange:e})=>i.createElement(gi.HeaderEditor,{height:190,onChange:t=>{e(t)}}),ki=({onChange:e})=>i.createElement(gi.VariableEditor,{height:190,onChange:t=>{e(t)}});var fi=a(13311),bi=a.n(fi);const{Option:yi}=Za.Z,{TextArea:_i}=Ae.Z,wi=({disabled:e,value:t,examples:a=[],description:n,onChange:r})=>{const{formatMessage:o}=(0,Ee.Z)();return i.createElement(i.Fragment,null,i.createElement(ga,{description:n,maxCharacters:280}),!T()(a)&&i.createElement(Za.Z,{style:{width:"40%"},optionLabelProp:"label",defaultValue:a[0].id,dropdownMatchSelectWidth:!1,placeholder:o({id:"select-example"}),onChange:e=>{var t;return r(null===(t=bi()(a,{id:e}))||void 0===t?void 0:t.value)},getPopupContainer:e=>e.parentElement},a.map((({name:e,id:t})=>i.createElement(yi,{key:t,value:t,label:e},i.createElement(Ce.Z,null,e))))),i.createElement(_i,{value:t,disabled:e,onChange:r}))};function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},xi.apply(this,arguments)}var Ei=a(18029),Ai=a.n(Ei),Ni=a(68630),Ii=a.n(Ni);const Si=({schema:e})=>e&&Ii()(e)?i.createElement("div",{className:"meta-fields"},(()=>{const t=["type"];return Object.entries(e).map((([e,a])=>{if(!t.includes(e)){if("externalDocs"===e){const{description:t,url:n}=a||{};return t&&n?i.createElement("p",{key:e},`${Ai()(e)}: `,i.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},t)):null}return i.createElement("p",{key:e},`${Ai()(e)}: ${a}`)}return null}))})()):null,Pi=({className:e,parameter:t,fullWidth:a=!1,showValueType:n=!0,showValueSchema:r=!0,hidden:o=!1,isFormDataParameter:s=!0})=>{const{formatMessage:l}=(0,Ee.Z)();if(!t||"object"!=typeof t)return null;const{id:d,valueType:c,name:p,condition:u,description:m,schema:g,value:v}=t,h=Ge(m),k=He(h),f=()=>i.createElement("div",{className:"label"},i.createElement(ca.Z,{title:p},i.createElement("label",{className:"name",htmlFor:d},p)),n&&i.createElement("div",{className:"type"},c),r&&i.createElement(Si,{schema:g})),b=((e,t)=>{if(!e||"object"!=typeof e)return null;const{id:a,condition:n,authType:r,options:o,disabled:s,examples:l,dropdownRender:d,onChange:c,placeholder:p,description:u,schema:m}=e,g="required"===(n||"").toLowerCase();let v=(ke()(e,"valueType")||r||"").toLowerCase();switch(v=v===dt&&ke()(e,"schema.enum")?ct:v,v){case dt:case pt:case"object":case ut:return i.createElement(Ra,{examples:l,disabled:s});case"date (yyyy-mm-dd)":return i.createElement(sn,null);case"time (24-hour hh:mm)":return i.createElement(nn,null);case"number":return i.createElement(Qa,null);case ct:return i.createElement(Ga,{disabled:s,options:o||ke()(e,"schema.enum"),required:g,dropdownRender:d,onChange:c,placeholder:p});case mt:return i.createElement(ui,{disabled:s,options:o,required:g});case"boolean":return i.createElement(cn,null);case gt:return i.createElement(Vn,{language:gt,description:u,schema:m,examples:l});case"xml":return i.createElement(Vn,{language:"xml",description:u,schema:m,examples:l});case"binary":return i.createElement(di,{name:a,readAsArrayBuffer:t});case"basic":return i.createElement($n,{name:"Authorization",disabled:!0});case vt:return i.createElement(li,xi({},e,{disabled:!0}));case ht:return i.createElement(Ya,{disabled:s});case kt:return i.createElement(vi,null);case ft:return i.createElement(ki,null);case bt:return i.createElement(hi,null);case"text":return i.createElement(wi,{examples:l,disabled:s,description:u});default:return`no field component for field type: ${v}`}})(t,s),y=i.createElement("div",{className:"extra"},i.createElement("div",{className:"condition"},u),i.createElement(da,{fontSize:"12px"},i.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:k}})));return i.createElement(Cn,{className:e},!a&&!o&&i.createElement(f,null),i.createElement(Aa.Z.Item,{"data-id":`form-field-${p}`,className:(()=>{const e=["parameter"];return a&&e.push("full-width"),o&&e.push("hidden"),e.join(" ")})(),name:d,rules:za()([{required:"required"===(u||"").toLowerCase(),message:i.createElement(Ce.Z,null,l({id:"form-field-required"},{name:p}))},(c||"").toLowerCase()===ut?{pattern:/^(\()(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)(\))$/gm,message:i.createElement(Ce.Z,null,l({id:"form-field-geo-pattern"},{name:p}))}:null]),initialValue:v,extra:!a&&!o&&y},b))},{extractColorFromTheme:Fi}=n.Z,Ci=o.default.div`
  padding: 10px 15px;
  border-bottom: 1px solid ${({theme:e})=>Fi("@okinatako-border-default",e)};
`,qi=function({projectAclsData:e,isShow:t}){const{formatMessage:a}=(0,Ee.Z)(),{enrichedProjects:n,onSelectedProjectChange:r,selectedProjectData:o}=e,s={id:Lt,name:"RapidAPI App",valueType:ct,options:n.map((e=>({name:e.name,value:e.mashapeId}))),condition:"required",value:null==o?void 0:o.mashapeId,onChange:r,placeholder:a({id:"add-new-app"}),dropdownRender:e=>i.createElement("div",null,e,i.createElement(wa.Z,{style:{margin:"4px 0"}}),i.createElement("div",{style:{padding:"0 12px"}},i.createElement(Oa,{onSelectedProjectChange:r})))};return t?i.createElement(Ci,null,i.createElement(Pi,{className:"application",parameter:s,showValueType:!1})):null},Di=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},Ti={kind:"Document",definitions:Di([{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createProjectAllowedAPIs"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"createProjectAllowedAPIInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createProjectAllowedAPIs"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"projectAllowedAPIsFields"},directives:[]}]}}]}}].concat(b)),loc:{start:0,end:172,source:{body:"\n  mutation createProjectAllowedAPIs($input: [createProjectAllowedAPIInput]) {\n    createProjectAllowedAPIs(input: $input) {\n      ...projectAllowedAPIsFields\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ji={kind:"Document",definitions:Di([{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateProjectAllowedAPI"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"updateProjectAllowedAPIInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateProjectAllowedAPI"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"projectAllowedAPIsFields"},directives:[]}]}}]}}].concat(b)),loc:{start:0,end:168,source:{body:"\n  mutation updateProjectAllowedAPI($input: updateProjectAllowedAPIInput) {\n    updateProjectAllowedAPI(input: $input) {\n      ...projectAllowedAPIsFields\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},{extractColorFromTheme:Oi}=n.Z,Vi=(0,o.default)(Rn.Z)`
  && {
    margin: 10px 15px 0 15px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .ant-alert-description {
      margin-block: 10px;
    }
    .ant-alert-message {
      margin-bottom: unset;
    }
    .ant-alert-with-description {
      padding: unset;
    }
    .anticon {
      position: unset;
      font-size: 18px;
      top: unset;
      left: unset;
    }

  }
`,zi=(0,o.default)(ee.Z)`
  max-width: 130px;
  border-radius: 4px; 
`,Zi=o.default.div`
  display: flex;
  flex-direction: row;
  margin: 10px 15px 0 15px;
  padding: 18px;
  background-color: #FFFBE8;
  border: 2px solid #EFB041;
  border-radius: 6px;
  word-wrap: break-word;
  .icon {
    font-size: 22px;
    color: #EFB041;
  }
  .context-section {
    display: flex;
    flex-direction: column;
    min-width: 0;
    margin-left: 18px;
    color: ${({theme:e})=>Oi("@okinatako-background-dark",e)};
    .actions {
      margin-top: 16px;
      button {
        color: ${({theme:e})=>Oi("@okinatako-background-dark",e)};
        border-radius: 6px;
        white-space: normal;
        height: auto;
      }
    }
  }
`,$i=({apiId:e,selectedApiVersionId:t,projectAclsData:a,setIsForcePresentationalDataUpdate:n})=>{const{context:r}=(0,i.useContext)(u),{formatMessage:o}=(0,Ee.Z)(),{enrichedProjects:s,selectedProjectData:l}=a,d=null==l?void 0:l.mashapeId,c=s.find((e=>e.mashapeId===d)),[p,{loading:m}]=(0,xa.D)(Ti,{variables:{input:[{apiId:e,apiVersionId:t,mashapeId:d,projectId:null==c?void 0:c.id}]},context:{headers:{"x-entity-id":r.activeContextId}},update:(e,{data:{createProjectAllowedAPIs:t}})=>{const{projectId:a}=t[0],i=e.readFragment({id:`Project:${a}`,fragment:y,fragmentName:"ProjectFields"});e.writeFragment({data:{...i,projectAllowedAPIs:[...i.projectAllowedAPIs,t[0]]},fragment:y,fragmentName:"ProjectFields"}),n(!0)},onError:e=>{throw e}});return(()=>{if(c&&d&&t&&e){const t=(c.projectAllowedAPIs||[]).map((e=>{var t;return null==e||null===(t=e.api)||void 0===t?void 0:t.id}));return c.enableLimitsToAPIs&&!t.includes(e)}return!1})()&&i.createElement(Vi,{type:"warning",showIcon:!0,description:o({id:"whitelist-api-header-notification"}),action:i.createElement(zi,{loading:m,onClick:p},o({id:"whitelist-api"}))})},Li=({isEntityHasAvailableApps:e})=>{const{formatMessage:t}=(0,Ee.Z)();return!e&&i.createElement(Vi,{type:"warning",showIcon:!0,description:t({id:"one-version-header-notification"},{myApps:t({id:"my-apps"}),myAppLink:e=>i.createElement("a",{target:"_blank",href:"/developer/new"},e)})})};var Ri=a(19650),Mi=a(57119);const Bi=({currentApi:e,isConnectionToDifferentApiVersionRequired:t,selectedProjectData:a,selectedVersion:n,onSelectedProjectChange:r,setIsForcePresentationalDataUpdate:o})=>{var s;const{context:l}=(0,i.useContext)(u),d=(0,g.useFlags)(),{formatMessage:c}=(0,Ee.Z)(),[p,m]=(0,i.useState)(!1),[v,h]=(0,i.useState)(!1),k=n.name,f=a.name,b=null===(s=a.projectAllowedAPIs)||void 0===s?void 0:s.find((t=>t.apiId===e.id)),[_]=(0,xa.D)(ji,{variables:{input:{id:null==b?void 0:b.id,apiId:e.id,apiVersionId:n.id,mashapeId:a.mashapeId,projectId:a.id}},context:{headers:{"x-entity-id":l.activeContextId}},update:(e,{data:{updateProjectAllowedAPI:t}})=>{const{projectId:a}=t,n=e.readFragment({id:`Project:${a}`,fragment:y,fragmentName:"ProjectFields"}),r=n.projectAllowedAPIs.map((e=>t.id===e.id?t:e));e.writeFragment({data:{...n,projectAllowedAPIs:r},fragment:y,fragmentName:"ProjectFields"}),$t.ZP.success(c({id:"connect_app_to_version_notification"},{appName:f,versionName:k,strong:e=>i.createElement("strong",null,e)})),o(!0)},onError:()=>{$t.ZP.error(c({id:"connect_app_to_version_failed_notification"},{appName:f,versionName:k,strong:e=>i.createElement("strong",null,e)}))}});return t&&i.createElement(Zi,null,i.createElement(Mi.Z,{className:"icon"}),i.createElement("div",{className:"context-section"},i.createElement("span",null,c({id:"connect_app_to_version_alert"},{appName:f,versionName:k,strong:e=>i.createElement("strong",null,e)})),i.createElement(Ri.Z,{className:"actions",align:"end",wrap:!0},i.createElement(ee.Z,{onClick:()=>{d.accessProvisioning?m(!0):window.open("/developer/new","_blank","noopener,noreferrer")},size:"small"},c({id:"add_new_app_for_version"})),i.createElement(ee.Z,{loading:v,onClick:async()=>{h(!0),await _(),h(!1)},size:"small"},c({id:"connect_to_current_version"})))),i.createElement(ja,{isOpenModal:p,setIsOpenModal:m,selectedVersionName:k,handleCreateNewAppCB:r}))},Ui=o.default.div`
  padding: 10px 15px;
`,Gi=({gateways:e,selectedGateway:t,baseUrls:a,selectedBaseUrl:n,selectedAppAuthorization:r,appAuthorizations:o,isAuth2:s})=>{var l,d;const c={id:Ut,name:"Request URL - HIDDEN",valueType:dt,condition:"required",disabled:!0,hidden:!0},p={id:Bt,name:"Request URL",valueType:mt,options:e.map((e=>({name:e.dns,value:e.id,data:e}))),condition:"required",value:t.id},u={id:Jt,name:"Authorization Name",valueType:ct,options:(null==o?void 0:o.map((e=>({name:e.groupName,value:e.id,data:e}))))||[],condition:"required",disabled:1===(null==o?void 0:o.length),value:null==r?void 0:r.id},m={id:Gt,name:"Base URL Selection",valueType:ct,options:null==a?void 0:a.map((e=>({name:e.url,value:e.url}))),condition:"required",value:n},g=null==t||null===(l=t.gatewayTemplate)||void 0===l||null===(d=l.urlPattern)||void 0===d?void 0:d.match(/{{\s*API_BASE_URL\s*}}/gim),v=s&&t.type&&"rapidapi"!==t.type.toLowerCase()&&!!o.length;return i.createElement(Ui,null,i.createElement(Pi,{parameter:p,showValueType:!1}),v&&i.createElement(Pi,{parameter:u,showValueType:!1}),g&&i.createElement(Pi,{parameter:m,showValueType:!1}),i.createElement(Pi,{parameter:c,showValueType:!1,hidden:!0}))},Hi=o.default.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`,Ki=o.default.div`
  display: flex;
  padding: 10px 15px;
`;function Qi(){return Qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Qi.apply(this,arguments)}const Wi=function({setIsForcePresentationalDataUpdate:e,isEntityHasAvailableApps:t,isConnectionToDifferentApiVersionRequired:a,contextSelectData:n,projectAcls:r,gateways:o,selectedGateway:s,selectedEndpoint:l,publicDns:d,tenant:c,apiWhitelistingData:p,isViewAppKeys:m,baseUrls:g,selectedBaseUrl:v,appAuthorizations:h,selectedAppAuthorization:k,isAuth2WithClientCredentialsEnabled:f}){const{context:b}=(0,i.useContext)(u),{selectedVersion:y}=(0,i.useContext)(S),{selectedProjectData:_,onSelectedProjectChange:w}=r,{api:x}=n;return i.createElement(Hi,null,b.activeContextId&&i.createElement(Li,{isEntityHasAvailableApps:t}),i.createElement(Bi,{currentApi:x,isConnectionToDifferentApiVersionRequired:a,selectedProjectData:_,selectedVersion:y,onSelectedProjectChange:w,setIsForcePresentationalDataUpdate:e}),i.createElement($i,Qi({},p,{projectAclsData:r,setIsForcePresentationalDataUpdate:e})),i.createElement(ka,{selectedEndpoint:l}),b.activeContextId&&i.createElement(i.Fragment,null,i.createElement(Ki,null,i.createElement(_a,{contextSelectData:n})),i.createElement(qi,{projectAclsData:r,isShow:m})),!(null==o||!o.length)&&i.createElement(Gi,{gateways:o,selectedGateway:s,publicDns:d,endpointPath:l.route,isAuth2:f,tenant:c,baseUrls:g,selectedBaseUrl:v,appAuthorizations:h,selectedAppAuthorization:k}))},{extractColorFromTheme:Ji}=n.Z,Yi=(0,o.default)(ee.Z)`
  min-width: 137px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  background-color: ${({theme:e})=>Ji("@primary-color",e)};
  border-color: ${({theme:e})=>Ji("@okinatako-border-default",e)};
  &[disabled]{
    background-color: ${({theme:e})=>Ji("@primary-color",e)};
    border-color: ${({theme:e})=>Ji("@okinatako-border-default",e)};
    opacity: 0.7;
    :hover {
      background-color: ${({theme:e})=>Ji("@primary-color",e)};
      border-color: ${({theme:e})=>Ji("@okinatako-border-default",e)};
      opacity: 0.7;
    }
  }
`,Xi=o.default.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`,er=o.default.span`
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.85;
  letter-spacing: normal;
`,tr=({onClick:e,disabled:t,loading:a=!1,hideIcon:n,textId:r})=>i.createElement(Yi,{"data-id":"endpoint-test-button",className:"endpoint-test-button",type:"primary",onClick:e,disabled:t,loading:a,icon:!n&&i.createElement(Xi,{src:A("test.svg")})},i.createElement(er,null,i.createElement(Ea.Z,{id:r})));var ar=a(35161),nr=a.n(ar),ir=a(3674),rr=a.n(ir);const or=o.default.div`
  .dropdown {
    .dropdown-label {
      margin-left: 1px;
      margin-bottom: 4px;
    }
    .ant-select {
      width: 80%;
    }
  }
`,{Option:sr}=Za.Z,lr=({value:e,options:t=[],label:a,onChange:n,className:r})=>{const o=t.length<2;return i.createElement(or,null,i.createElement("div",{className:`dropdown ${r||""}`},i.createElement("div",{"data-id":"dropdown-label",className:"dropdown-label"},a),i.createElement(Za.Z,{"data-id":`dropdown-${r||""}`,value:e,onChange:n,disabled:o,showArrow:!o,getPopupContainer:e=>e.parentElement,dropdownMatchSelectWidth:!1},t.map((t=>i.createElement(sr,{key:t.key,value:t.value},i.createElement(Ce.Z,null,i.createElement("span",{"data-id":`media-type-opt-${e}`},t.display))))))))};lr.propTypes={value:X().oneOfType([X().string,X().number]).isRequired,label:X().string.isRequired,options:X().arrayOf(X().shape({value:X().oneOfType([X().string,X().number]).isRequired,key:X().oneOfType([X().string,X().number]).isRequired,display:X().oneOfType([X().string,X().number]).isRequired})).isRequired};const dr=lr;var cr=a(84486),pr=a.n(cr),ur=a(78718),mr=a.n(ur),gr=a(8816),vr=a.n(gr),hr=a(88846),kr=a.n(hr),fr=a(58809),br=a.n(fr),yr=a(83927),_r=a.n(yr),wr=a(40104),xr=a.n(wr),Er=a(76262),Ar=a.n(Er),Nr=a(90398),Ir=a(63927);const Sr=(e,t)=>Number.isInteger(e.index)?Number.isInteger(t.index)?e.index-t.index:-1:1,Pr=e=>({...mr()(e,["id","description","schema","name"]),valueType:e.format.toUpperCase(),parameterType:"PAYLOAD",condition:"required",value:e.body,examples:e.examples.map((e=>({...e,summary:""})))}),{extractColorFromTheme:Fr}=n.Z,Cr=o.default.div`
  .request-media-types-list {
    width: 40%;
    margin-bottom: 10px;
  }
`,qr=(0,o.default)(wa.Z)`
  && {
    color: ${({theme:e})=>Fr("@okinatako-background-extra-accent",e)} !important;
    ::before,
    ::after {
      border-top-color: ${({theme:e})=>Fr("@okinatako-background-extra-accent",e)} !important;
    }
  }
`,Dr=({mediaTypeToRequestParamsMap:e,onMediaTypeChange:t})=>{const a=rr()(e).filter((e=>e===Xt||ta.includes(e.toUpperCase()))),{formatMessage:n}=(0,Ee.Z)(),[r,o]=(0,i.useState)(a[0]),s=e=>{o(e),t(e)};(0,i.useEffect)((()=>{t(r)}),[]),(0,i.useEffect)((()=>{e[r]||s(a[0])}),[r,e]);const l=e[r],d=r===Xt;return l?(d&&l.sort(Sr),i.createElement(Cr,{"data-id":"request-body-editor"},(null==a?void 0:a.length)>1&&i.createElement(dr,{value:r,options:nr()(a,(e=>({key:e,value:e,display:ea[e.toUpperCase()]}))),onChange:s,className:"request-media-types-list",label:n({id:"media-types"})}),Array.isArray(l)?function(e,t){const{REQUIRED:a,OPTIONAL:n}=Dt()(e,"condition"),r=[],o=a&&n;return a&&(o&&r.push(i.createElement(qr,{key:"required",orientation:"left"},t({id:"required-parameters"}))),a.forEach((e=>{r.push(i.createElement(Pi,{key:e.id,parameter:e,isFormDataParameter:!0}))}))),n&&(o&&r.push(i.createElement(qr,{key:"optional",orientation:"left"},t({id:"optional-parameters"}))),n.forEach((e=>{r.push(i.createElement(Pi,{key:e.id,parameter:e,isFormDataParameter:!0}))}))),r}(l,n):i.createElement(Pi,{fullWidth:!0,parameter:l,isFormDataParameter:d}))):null},Tr={id:X().string.isRequired,condition:X().string.isRequired,description:X().string,name:X().string,schema:X().object,options:X().array,examples:X().array,value:X().string,valueType:X().string.isRequired,parameterType:X().oneOf(["PAYLOAD","BODY"]).isRequired};Dr.propTypes={mediaTypeToRequestParamsMap:X().objectOf(X().oneOfType([X().shape(Tr),X().arrayOf(X().shape(Tr))]).isRequired)},Dr.defaultProps={mediaTypeToRequestParamsMap:{}};const jr=Dr;var Or=a(47933);const{extractColorFromTheme:Vr}=n.Z,zr=o.default.div`
  background: unset;
  * {
    color: ${({theme:e})=>Vr("@okinatako-content-primary",e)};
    background: unset;
  }
  .CodeMirror {
    border: 1px solid ${({theme:e})=>Vr("@okinatako-border-default",e)};
    border-radius: 4px;
    background: unset;
    .CodeMirror-scroll {
      background-color: ${({theme:e})=>Vr("@okinatako-input-primary",e)};
      border: none;
      .CodeMirror-gutter {
        background-color: ${({theme:e})=>Vr("@okinatako-input-primary",e)};
      }
      .cm-punctuation {
        color: ${({theme:e})=>Vr("@okinatako-content-primary",e)};
      }
      .CodeMirror-cursor {
        border-left-color: ${({theme:e})=>Vr("@okinatako-content-primary",e)};
      }
    }
  }
`,Zr=o.default.div`
  padding-bottom: 20px;
`,$r=(0,o.default)(Or.ZP.Button)`
  && {
    background-color: ${({theme:e})=>Vr("@okinatako-background-tertiary",e)};
    &.ant-radio-button-wrapper-checked {
      background-color: ${({theme:e})=>Vr("@okinatako-background-tertiary",e)};
    }
  }
`,{TabPane:Lr}=un.Z,Rr=function({gqlHeaders:e,gqlBody:t}){const{formatMessage:a}=(0,Ee.Z)(),n={gqlHeaders:e};t.forEach((e=>{switch(e.parameterType.toLowerCase()){case"gqloperationame":n.gqlOperationName=e;break;case"gqlquery":n.gqlQuery=e;break;case"gqlvariables":n.gqlVariables=e}}));const[r,o]=(0,i.useState)("query_variable");function s({target:e}){o(e.value)}return i.createElement(zr,{className:"notranslate",translate:"no"},i.createElement(Pi,{hidden:!0,key:n.gqlOperationName.id,parameter:n.gqlOperationName}),i.createElement(Pi,{fullWidth:!0,showValueType:!1,showValueSchema:!1,key:n.gqlQuery.id,parameter:n.gqlQuery}),i.createElement(un.Z,{activeKey:r,renderTabBar:()=>i.createElement(Zr,null,i.createElement(Or.ZP.Group,{onChange:s,defaultValue:r},i.createElement($r,{value:"query_variable"},i.createElement("span",null,a({id:"variables"}))),i.createElement($r,{value:"http_headers"},i.createElement("span",null,a({id:"http-headers"})))))},i.createElement(Lr,{tab:"query_variable",key:"query_variable"},i.createElement(Pi,{fullWidth:!0,showValueType:!1,showValueSchema:!1,key:n.gqlVariables.id,parameter:n.gqlVariables})),i.createElement(Lr,{tab:"http_headers",key:"http_headers"},i.createElement(Pi,{fullWidth:!0,showValueType:!1,showValueSchema:!1,key:n.gqlHeaders.id,parameter:n.gqlHeaders}))))};var Mr=a(98824),Br=a(73171),Ur=a(84391),Gr=a(1977);const Hr=(0,o.default)(zn.Z)`
  flex-wrap: nowrap;
  height: 70px;
`,Kr=(0,o.default)(Aa.Z.Item)`
  flex: 1;
  margin-right: 20px !important;
`,Qr=o.default.div`
  max-width: 150px;
  margin-left: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wr=(0,o.default)(zn.Z)`
  margin-top: 4px;
`,Jr=(0,o.default)(ee.Z)`
  margin-left: auto;
  border: none !important; 
`,Yr=(0,o.default)(ee.Z)`
  width: 180px;
`,Xr={varPath:"",file:null,required:!1},eo=({uploadTypes:e})=>{const{formatMessage:t}=(0,Ee.Z)(),a=Aa.Z.useFormInstance();return(0,i.useEffect)((()=>{a.resetFields([Yt]),a.setFieldValue(Yt,e)}),[e]),i.createElement(Aa.Z.List,{name:Yt},((e,{add:n,remove:r})=>i.createElement(i.Fragment,null,e.map((e=>i.createElement(Hr,{key:e.key},i.createElement(Kr,{name:[e.name,"varPath"],fieldKey:[e.key,"varPath"],rules:[{required:a.getFieldValue([Yt,e.name]).required,message:t({id:"form-field-required"},{name:"Variable path"})}],id:`files_${e.name}_varPath`},i.createElement(Ae.Z,{placeholder:t({id:"path_to_variable"})})),i.createElement(Aa.Z.Item,{name:[e.name,"file"],fieldKey:[e.key,"file"],valuePropName:"file",getValueFromEvent:e=>e.fileList.length?e.fileList[0].originFileObj:null,rules:[{required:a.getFieldValue([Yt,e.name]).required,message:t({id:"form-field-required"},{name:"File"})}]},i.createElement(Mr.Z,{maxCount:1,beforeUpload:()=>!1,itemRender:(e,t,a,{remove:n})=>i.createElement(Wr,{align:"middle"},i.createElement(ca.Z,{title:t.name,placement:"left"},i.createElement(Qr,null,t.name)),i.createElement(Jr,{icon:i.createElement(Br.Z,null),onClick:n,size:"small"}))},i.createElement(Yr,{icon:i.createElement(Ur.Z,null)},t({id:"select_file"})))),i.createElement(ee.Z,{icon:i.createElement(Br.Z,null),onClick:()=>r(e.name),style:{marginLeft:"10px"},shape:"circle"})))),i.createElement(ee.Z,{icon:i.createElement(Gr.Z,null),onClick:()=>n(Xr)},t({id:"new"})))))};var to=a(28896);const{Panel:ao}=Te.Z,no=["header","required","optional"],io=function({selectedEndpoint:e,setRequestMediaType:t,endpointParameters:a}){const{formatMessage:n}=(0,Ee.Z)(),r=Aa.Z.useFormInstance(),{uploadTypes:o}=(()=>{const{query:e,queryFacts:t}=(0,to.useSchemaContext)();return{uploadTypes:(0,i.useMemo)((()=>t.variableToType?(e=>{const t=[];return(0,Ir.Z)(e,((e,a,n,{path:i})=>{if(e instanceof Nr.n2&&"Upload"===e.name){const e=i.filter((e=>"ofType"!==e&&"type"!==e&&"_fields"!==e));t.push({varPath:e.join("."),required:n instanceof Nr.bM,file:null})}}),{pathFormat:"array",checkCircular:!0}),t})(t.variableToType):[]),[e,t])}})(),[s,l]=(0,i.useState)([...no,"body","files"]),d=()=>{r.setFieldValue(Yt,[])};return a&&i.createElement(Te.Z,{defaultActiveKey:s,activeKey:s,onChange:e=>l(e)},(r=>{var s;const l=[];if(no.forEach((e=>{const t=r[e];t.length&&l.push(i.createElement(ao,{key:e,header:n({id:`${e}-parameters`})},t.map((e=>i.createElement(Pi,{key:e.id,parameter:e,hidden:e.hidden,value:e.value})))))})),"GET"!==e.method&&(null===(s=e.requestPayloads)||void 0===s?void 0:s.length)>0&&!e.isGraphQL){const a=((e,t)=>{const a={};return pr()(t,(t=>{t.format===Xt?a[t.format]=(e=>vr()(xr()({parameterType:"BODY"}),kr()((e=>({...Ar()(["createdAt","endpoint","querystring","status","type","updatedAt"])(e),value:"string"==typeof e.value?e.value:JSON.stringify(e.value),examples:Object.values(vr()(br()("name"),_r()((e=>({...e,summary:"",id:e.name}))))(e.examples))}))))(e))(e):a[t.format]=Pr(t)})),a})(e.parameters,e.requestPayloads);l.push(i.createElement(ao,{key:"body",header:n({id:"request-body"})},i.createElement(jr,{mediaTypeToRequestParamsMap:a,onMediaTypeChange:t})))}if(e.isGraphQL){const{gqlHeaders:e,gqlBody:t}=a;l.push(i.createElement(ao,{key:"required",header:n({id:"required-parameters"})},i.createElement(Rr,{gqlHeaders:e,gqlBody:t,setEndpointParamsMap:()=>{}}))),o.length?l.push(i.createElement(ao,{key:"files",header:n({id:"files"})},i.createElement(eo,{uploadTypes:o}))):d()}else d();return l})(a))};var ro=a(36968),oo=a.n(ro);const so=async(e,t,a)=>{const n=((e,t)=>{var a;const n=e.headers.reduce(((e,t)=>({...e,[t.name.toLowerCase()]:t.value})),{}),i=e.queryString.reduce(((e,t)=>({...e,[t.name]:t.value})),{}),r={url:e.url,method:e.method,responseType:"arraybuffer",headers:{...n,useQueryString:!0,"x-rapidapi-ua":"RapidAPI-Playground","Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"},params:{...i}};if(null!==(a=e.postData.mimeType)&&void 0!==a&&a.includes("multipart/form-data")||null!=t&&t.length){const a=new FormData;if(null!=t&&t.length&&e.postData.jsonObj){const n=lt()(e.postData.jsonObj);t.forEach((e=>oo()(n,`variables.${e.varPath}`,null))),a.append("operations",JSON.stringify(n));const i=t.reduce(((e,t,a)=>({...e,[a]:[`variables.${t.varPath}`]})),{});a.append("map",JSON.stringify(i)),t.forEach(((e,t)=>a.append(t,e.file)))}else null!=t&&t.length||e.postData.params.forEach((e=>{a.append(e.name,e.file?e.file:e.value)}));r.headers["content-type"]="multipart/form-data",r.data=a}else e.postData.mimeType&&e.postData.mimeType.indexOf("application/json")>-1?r.data=e.postData.jsonObj:r.data=e.postData.text;return r})(e,a);let i,r=200;try{i=await Gn()(n)}catch(e){var o;e.response&&(i={...e.response,error:!0}),r=(null===(o=e.response)||void 0===o?void 0:o.status)||500}return((e,t)=>{const{api_id:a,api_name:n,owner:{id:i,name:r}}=t||{owner:{}};Jn({event:"API Response",properties:{category:"API Page",api_id:a,api_name:n,user_id:i,user_name:r,response_code:e}})})(r,t),i},lo=e=>{const{userInfo:t,entityActiveSubscriptions:a,billingPlans:n,selectedEndpoint:i,harObject:r,testEndpoint:o,isEntityHasAvailableApps:s,isConnectionToDifferentApiVersionRequired:l,commonSegmentParams:d}=e,p=i.id;let u=()=>o(((e=[])=>(Jn({event:"Api Tested",properties:{...d,endpoint:i.name}}),so(r,d,e)))),m="test_endpoint",g=!1,v="test_endpoint";const h=!(null==t||!t.id),k=(!h||T()(a))&&function(e){if(1!==e.length||"FREE"!==e[0].version.pricing)return!0;const t=e[0],a=t.shouldRequestApproval,n=t.legalDocumentId&&t.legalAccountId,i=!!t.version.enablebillingfeatures.length;return a||n||i}(n);h?k&&(u=()=>(e=>{(0,c.WI)("subscribeToTestRedirect",{endpointId:e})})(p),m="subscribe_to_test",v="need_to_subscribe_title",g=!0):(u=()=>(e=>(0,c.WI)("loggedOutRedirect",{endpointId:e}))(p),v="need_to_login_title");const f=!r||!!r.error;return{onClick:u,disableButton:h&&!s||l||f,buttonTextId:m,tooltipTitle:v,hideIcon:g}},co=(e,t)=>{if(!e||!t)return null;const a=Object.entries(t).reduce(((e,[t,a])=>(e[t.replace(/\s/g,"").toLocaleLowerCase()]=a,e)),{}),n=e.replace(/\s/g,"");let i="",r="",o=!1;for(let e=0;e<n.length;e+=1)"{"===n[e]&&(o=!0,e+=2),"}"===n[e]&&(i+=a[r.toLowerCase().trim()]??`{${r}}`,o=!1,r="",e+=2,"{"===n[e]&&(o=!0,e+=2)),o?r+=n[e]:i+=n[e]||"";return i},po=(e,t,a,n,i)=>{if(!e)return"";const r=(t||[]).find((e=>e.current)),o=((null==r?void 0:r.address)||"").split(".")[0],{dns:s,gatewayTemplate:l}=e,{slugifiedKey:d}=n;return co((null==l?void 0:l.urlPattern)||"",{api_id:o,gw_url:s,path:a,tenant_name:d,api_base_url:i})},uo="application/json",mo="text/plain",go="application/octet-stream",vo="multipart/form-data",ho={JSON:"application/json",XML:"application/xml",TEXT:"text/plain",BINARY:"application/octet-stream",FORM_DATA:"form-data",PLAIN:"plain",HTML:"html"},ko=["JSON","XML","TEXT","BINARY","HTML","PLAIN"],fo={JSON:uo,XML:"application/xml",TEXT:mo,PLAIN:mo,HTML:"text/html",BINARY:go},bo="endpoints",yo="assets";var _o=a(85564),wo=a.n(_o),xo=a(78849),Eo=a.n(xo),Ao=a(16602),No=a.n(Ao);const Io=[{title:"PHP",key:"php",clients:[{title:"Unirest/Request",key:"unirest_request",language:"php"}]},{title:"Python",key:"python",clients:[{title:"Unirest",key:"unirest",language:"python"}]},{title:"Ruby",key:"ruby",clients:[{key:"unirest",title:"Unirest",language:"ruby"}]},{title:"Objective-C",key:"objc",clients:[{key:"unirest",title:"Unirest",language:"objectivec"}]},{title:"C#",key:"csharp",clients:[{key:"unirest",title:"Unirest",language:"csharp"}]}],So=e=>"BINARY"===e.valueType.toUpperCase(),Po=(()=>{const e=Dt()(No().availableTargets().concat(Io),"key");return Object.keys(e).map((t=>(e=>{if(1===e.length)return e[0];const t=Pt()(e,"clients");return{...e[0],clients:t}})(e[t])))})().map((e=>({...e,clients:e.clients.map((t=>{const{key:a,title:n}=e;return{...t,parentKey:a,parentTitle:n,language:(i=a,t.key,ke()({c:"c",clojure:"java",csharp:"csharp",go:"go",http:"http",java:"java",javascript:"javascript",node:"javascript",objc:"objectivec",ocaml:"ocaml",php:"php",powershell:"powershell",python:"python",ruby:"ruby",shell:"bash",swift:"swift",rapidql:"javascript"},i,"javascript"))};var i}))}))),Fo=ke()(Po.find((e=>"node"===e.key)),"clients",[]).find((e=>"axios"===e.key)),Co=e=>{try{return new(No())(e)}catch(e){return{}}},qo=(e,t,a)=>{const{publicDns:n,selectedEndpoint:i,shouldUseCustomGatewaySelection:r,requestMediaType:o}=t,{route:s,method:l,requestPayloads:d}=i;let c;if(r)c=e["gateway-url"];else{const t=e["x-rapidapi-host"];c=`${n[0].proxyMode||`https://${t}`}${s}`}let p=a.body;if("GET"!==l&&o){const e=(u=d,m=o,bi()(u,{format:m}));e&&"FORM_DATA"!==o&&(p=[Pr(e)])}var u,m;let g;return r&&!c?g={error:"NO-GATEWAY"}:(g=(({formValues:e,endpointParams:t,method:a="GET",url:n})=>{if(!e||!t)return{};let i={};const r={method:a,url:n,headers:[],queryString:[],postData:{}},o={},s=(e,t)=>"REQUIRED"!==(e.condition||"").toUpperCase()||t?t:So(e)?"<FILE GOES HERE>":"<REQUIRED>",l=(e,t)=>{const a=[],n=s(e,t);if(e.valueType.toLowerCase()===pt&&e.parameterType.toLowerCase()!==yt){let t;try{const e=JSON.parse(n);t=Array.isArray(e)?e:[e]}catch{t=[n]}t.forEach(((t,n)=>{a.push({name:`${e.name}[${n}]`,value:t.toString()})}))}else a.push({name:e.name,value:n});return a};wo()(Object.values(t)||[]).forEach((t=>{const a="REQUIRED"===(t.condition||"").toUpperCase(),n=t.id in e?e[t.id]:t.value,d=t.id in e&&(a||!t.hidden&&!!n),c=(t.parameterType||"").toLowerCase();if(d)switch(c){case yt:{const e=l(t,String(n));r.headers.push(...e)}break;case"query":{const e=l(t,String(n));r.queryString.push(...e)}break;case"path":o[t.name]=String(n);break;case"body":{const e=So(t);let a;a=e?[{name:ke()(t,"name"),fileName:ke()(n,"fileName"),contentType:go,file:ke()(n,"file")}]:l(t,String(n)),r.postData.mimeType!==vo&&(r.postData.mimeType=e?vo:"application/x-www-form-urlencoded"),r.postData.params||(r.postData.params=[]),r.postData.params.push(...a)}break;case"payload":r.postData.mimeType=fo[t.valueType.toUpperCase()],So(t)?r.postData.text=s(t,n.data):r.postData.text="object"==typeof n?JSON.stringify(n):n;break;case"gqloperationname":case"gqlquery":case"gqlvariables":{const e={[t.name]:n};i={...i,...e},r.postData.text=JSON.stringify(i),r.postData.mimeType=uo}break;case"gqlheaders":Object.entries(n).forEach((([e,t])=>{r.headers.push({name:e,value:t})}))}})),Eo()(r.url,/\{(.*?)\}/g).toArray().forEach((e=>{o[e]&&(r.url=r.url.replace(`{${e}}`,encodeURI(String(o[e]).trim())))}));const d=[{name:"content-type",value:null==r?void 0:r.postData.mimeType}].filter((e=>e.value));return r.headers.unshift(...d),r})({formValues:e,endpointParams:{...a,body:p},method:l,url:c}),Co(g)),g},Do=(e=[])=>null!=e&&e.length?e.filter((e=>"RAPIDAPI"===e.type)):[],To={id:Kt,parameterType:"GQLOPERATIONAME",name:Kt,valueType:"gqloperationname",condition:"optional",value:""},jo={id:Ht,parameterType:"GQLQUERY",name:Ht,valueType:kt,condition:"optional",value:""},Oo={id:Wt,parameterType:"GQLHEADERS",name:Wt,valueType:bt,condition:"optional",value:""},Vo={id:Qt,parameterType:"GQLVARIABLES",name:Qt,valueType:ft,condition:"optional",value:""},zo=({rapidKey:e,selectedGateway:t,shouldUseCustomGatewaySelection:a,tenant:n,data:i})=>{const{apiId:r,selectedEndpoint:o,apiMetaData:s,appAuthorizations:l,publicDns:d,selectedAppAuthorization:c}=i,p={header:[],required:[],optional:[],body:[]},{parameters:u=[],route:m}=o;var g;if(u.forEach((e=>{var t;const a={...e};var n,i;switch((null===(t=a.authType)||void 0===t?void 0:t.toLowerCase())===vt&&(a.targetApi={id:r,name:null==s?void 0:s.name,owner:null==s||null===(n=s.owner)||void 0===n?void 0:n.slugifiedName},a.appliedOauth2Scopes=o.appliedOauth2Scopes||[],(null==c||null===(i=c.type)||void 0===i?void 0:i.toLowerCase())===vt&&(a.authValues=c.items.reduce(((e,{name:t,value:a})=>({...e,[t]:a})),{}))),(a.parameterType||"").toLowerCase()){case"header":p.header.push(a);break;case"body":case"payload":p.body.push(a);break;case"":break;default:"required"===(a.condition||"").toLowerCase()?p.required.push(a):p.optional.push(a)}})),g=p,Object.values(g).forEach((e=>{e.sort(Sr)})),o.isGraphQL&&(p.gqlHeaders=Oo,p.gqlBody=[To,jo,Vo]),a){const a=((e,t,a,n,i,r)=>{var o;if(!e)return null;const s=(a||[]).find((e=>e.current)),l=((null==s?void 0:s.address)||"").split(".")[0],{slugifiedKey:d}=r;return((null==e||null===(o=e.gatewayTemplate)||void 0===o?void 0:o.headers)??[]).map((a=>{const r={parameterType:"header",id:(a.paramName||"").toLowerCase(),name:a.paramName,valueType:dt,condition:"required",disabled:!!a.paramValue,value:co(a.paramValue,{"x-rapidapi-key":t,api_id:l,gw_url:e.dns,path:i,tenant_name:d})};return Mt===a.paramName.toLowerCase()?{...r,options:Do(n),valueType:ct,hidden:!1,disabled:!1}:r}))})(t,e,d,l,m,n);p.header.push(...za()(a))}else null!=l&&l.length&&p.header.push((({appAuthorizations:e,hidden:t})=>({id:Mt,parameterType:"header",name:"X-RapidAPI-Key",valueType:ct,options:Do(e),condition:"required",hidden:t}))({appAuthorizations:l,hidden:a})),null!=d&&d.length&&p.header.push((e=>e?{id:Rt,parameterType:"header",name:"X-RapidAPI-Host",valueType:ct,options:(e||[]).map((e=>({name:e.address,value:e.address}))),condition:"required",disabled:!0,value:ke()(e,[0,"address"])}:null)(d));return p};var Zo=a(67523),$o=a.n(Zo);const Lo=(e,t)=>{const a=e||[],n=(t||[]).filter((e=>"active"===e.status.toLowerCase()&&"active"===e.serviceStatus.toLowerCase())),i=$o()(n,(e=>e.id));let r=za()(a.map((e=>i[e])));if(r.length)r=function(e){const t=[],a=[];return e.forEach((e=>{"rapidapi"===e.type?t.push(e):a.push(e)})),[...t,...a]}(r);else{const e=n.find((e=>e.isDefault));e&&(r=[e])}return r};var Ro=a(59704),Mo=a.n(Ro);const Bo={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getGateways"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getGateways"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dns"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"serviceStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isDefault"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gatewayTemplate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"urlPattern"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"paramName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"paramValue"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"paramDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"tenant"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"domain"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slugifiedKey"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:315,source:{body:"\nquery getGateways {\n  getGateways {\n    id\n    dns\n    serviceStatus\n    type\n    status\n    isDefault\n    gatewayTemplate {\n      name\n      urlPattern\n      headers {\n        paramName\n        paramValue\n        paramDescription\n        id\n      }\n    }\n  }\n  tenant {\n    domain\n    name\n    slugifiedKey\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Uo=function(e=[],t,a){return e.reduce(((e,{Project:n})=>{if(!n)return e;const i={...n},r=i.projectAllowedAPIs.some((e=>e.apiId===t)),o=i.projectAllowedAPIs.some((e=>e.apiVersionId===a));return i.isAssociatedWithApiLevel=r,i.isAssociatedWithCurrentVersionLevel=o,[...e,i]}),[])},Go=(e,t)=>e.find((e=>e.mashapeId===t))||{},Ho={projectAcls:[],activeSubscriptionByApiId:[]},Ko=e=>{const t=e.getGateways,{tenant:a}=e,{publicdns:n,authentication:i}=e.apiVersion,{projectAcls:r,activeSubscriptionByApiId:o}=e.entityById||Ho,s=e.getActiveUserContext,l=e.activeUser,d=e.appAuthorizations,c=null==i?void 0:i.grantType;return{envGateways:t,projectAcls:r,userContextTree:s,userInfo:l,appAuthorizations:d.reduce(((e,t)=>{const a=t.authorizationValues?JSON.parse(t.authorizationValues):null,n=t.authorizationType||"",i="rapidapi"===n.toLowerCase(),r=c&&c===t.grantType,o={id:t.id,applicationId:t.applicationId,type:n,groupName:t.name,gateways:t.gateways};return i?o.items=[{name:t.key,value:t.key}]:r&&(o.items=Object.entries(a).map((([e,t])=>({name:e,value:t}))),o.grantType=t.grantType),i||r?[...e,o]:e}),[]),publicDns:n,entityActiveSubscriptions:o,tenant:a}},Qo={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"applicationAuthorizations"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"projectId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"applicationAuthorizations"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"projectId"},value:{kind:"Variable",name:{kind:"Name",value:"projectId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"applicationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"authorizationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grantType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"authorizationValues"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gateways"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:347,source:{body:"\n  query applicationAuthorizations($projectId: ID!)  {\n    applicationAuthorizations(\n      where: {\n          projectId: $projectId,\n      }\n    ) {\n        id\n        key\n        name\n        applicationId\n        status\n        authorizationType\n        grantType\n        authorizationValues\n        gateways {\n          id\n        }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Wo=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},Jo={kind:"Document",definitions:Wo([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"entityByIdWithProjects"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"entityID"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apiId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entityById"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"entityID"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"EntityCoreFields"},directives:[]},{kind:"Field",name:{kind:"Name",value:"projectAcls"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Project"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProjectFields"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"activeSubscriptionByApiId"},arguments:[{kind:"Argument",name:{kind:"Name",value:"apiId"},value:{kind:"Variable",name:{kind:"Name",value:"apiId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}].concat(y.definitions,k)),loc:{start:0,end:235,source:{body:"\nquery entityByIdWithProjects($entityID: ID, $apiId: ID!){\n  entityById(id: $entityID) {\n  ...EntityCoreFields\n  projectAcls {\n    Project {\n      ...ProjectFields\n    }\n  }\n  activeSubscriptionByApiId(apiId: $apiId){\n    id\n  }\n}\n}\n\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Yo.apply(this,arguments)}const Xo=function(e){return({api:t,selectedEndpoint:a,...n})=>{var r;const{formatMessage:o}=(0,Ee.Z)(),{context:s}=(0,i.useContext)(u),{selectedVersion:l}=(0,i.useContext)(S),[d,c]=(0,i.useState)(null),[p,m]=(0,i.useState)(!1),[g,h]=(0,i.useState)(null),k=E("showAPIGatewayService"),{id:f}=t,b=l.id,{loading:_,data:x,error:A}=(0,v.a)(Jo,{skip:!s.activeContextId,variables:{entityID:s.activeContextId,apiId:f},context:{headers:{"x-entity-id":s.activeContextId}}}),{loading:N,data:I}=(0,v.a)(w),{data:P,loading:F}=(0,v.a)(Bo,{skip:!k}),{data:C,loading:q,error:D}=(0,v.a)(It,{variables:{apiVersionId:b}}),[T,j]=(0,i.useMemo)((()=>{var e;const t=Uo(null==x||null===(e=x.entityById)||void 0===e?void 0:e.projectAcls,f,b);let a=t.find((e=>e.mashapeId===d));return!t.length&&d?(c(null),a=null):!t.length||d&&a||(c(t[0].mashapeId),a=t.find((e=>e.mashapeId===t[0].mashapeId))),[t,a]}),[null==x||null===(r=x.entityById)||void 0===r?void 0:r.projectAcls,f,b,d]),{data:O,loading:V,error:z}=(0,v.a)(Qo,{variables:{projectId:null==j?void 0:j.id},context:{headers:{"x-entity-id":s.activeContextId}},skip:!(null!=j&&j.id)}),Z=Go(T,d),[$]=(0,xa.D)(Ti,{variables:{input:[{apiId:f,apiVersionId:b,mashapeId:d,projectId:null==Z?void 0:Z.id}]},context:{headers:{"x-entity-id":s.activeContextId}},update:(e,{data:{createProjectAllowedAPIs:t}})=>{const{projectId:a}=t[0],n=e.readFragment({id:`Project:${a}`,fragment:y,fragmentName:"ProjectFields"});e.writeFragment({data:{...n,projectAllowedAPIs:[...n.projectAllowedAPIs,t[0]]},fragment:y,fragmentName:"ProjectFields"}),$t.ZP.success(o({id:"connect_app_to_version_notification"},{appName:Z.name,versionName:l.name,strong:e=>i.createElement("strong",null,e)})),m(!0)},onError:()=>{$t.ZP.error(o({id:"connect_app_to_version_failed_notification"},{appName:Z.name,versionName:l.name,strong:e=>i.createElement("strong",null,e)}))}}),L=V||!!T.length&&!j;(0,i.useEffect)((()=>{Mo()([q,V,_,F,N,L])&&!p||(h({entityWithProjects:x||{},activeUserAndContext:I,versionData:C,appAuthorizations:(null==O?void 0:O.applicationAuthorizations)??[],activeContextId:s.activeContextId,selectedVersion:l,selectedProjectAclID:d}),m(!1))}),[q,V,_,F,d,s.activeContextId,N,b,p,T]);const R=D||A||z;if(R)throw R;if(!g)return i.createElement(xe,{loading:!0});const M=Mo()([q,V,_,F,L]);return i.createElement(fe.Z,{spinning:M,size:"large"},i.createElement(e,Yo({api:t,selectedEndpoint:a,selectedVersion:g.selectedVersion,formData:Ko({appAuthorizations:g.appAuthorizations,...g.entityWithProjects,...g.versionData,...g.activeUserAndContext,...P}),setSelectedProjectAclID:c,selectedProjectAclID:g.selectedProjectAclID,setIsForcePresentationalDataUpdate:m,connectProjectToVersion:$},n)))}},es=async function(e,t=!1){try{return await e.validateFields(),!0}catch(e){if(t){var a;const t=null===(a=e.errorFields[0].name)||void 0===a?void 0:a.join("_"),n=window.document.getElementById(t),i=null==n?void 0:n.closest(".ant-form-item");null==i||i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}return!1}},ts=(e={},t)=>{const a=Object.values(e).reduce(((e,t)=>[...e,...Object.values(t.children).map((e=>({...e,organizationId:t.id})))]),[]),n=a.find((e=>e.id===t));let i;if(n)i={entityId:n.id,organization:n.organizationId,type:n.type};else{var r;const e=null===(r=a[0])||void 0===r?void 0:r.children[t];e&&(i={entityId:e.id,type:e.type})}return i},as=(e,t,a)=>{var n;if(!t)return"NOT-AUTHORIZED";if(!a)return"SIGN-UP-FOR-KEY";const i=Do(e);return i.length?null===(n=i[0].items[0])||void 0===n?void 0:n.value:""},ns=(0,o.default)(Aa.Z)`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,is=o.default.div`
  height: 100%;
  overflow-y: auto;
  flex: 1;
`,rs=Xo((function({api:e,selectedEndpoint:t,harObject:a,setHarObject:n,setResponseFromEndpoint:r,setSelectedProjectAclID:o,selectedProjectAclID:s,formData:l,setIsForcePresentationalDataUpdate:d,isMultiVersioning:c,connectProjectToVersion:p}){var m;const{context:g}=(0,i.useContext)(u),{selectedVersion:v}=(0,i.useContext)(S),{formatMessage:h}=(0,Ee.Z)(),[k]=ns.useForm(),[f,b]=(0,i.useState)(!1),[y,_]=(0,i.useState)([]),[w,x]=(0,i.useState)(null),[A,N]=(0,i.useState)(null),I=E("showAPIGatewayService"),P=ri(g.activeContextId),F=v.id,C=null==v||null===(m=v.targetGroup)||void 0===m?void 0:m.targetUrls,{gateways:q,billingPlans:D,id:j}=e,{envGateways:V,projectAcls:z,userContextTree:Z,userInfo:$,entityActiveSubscriptions:L,appAuthorizations:R,publicDns:M,tenant:G}=l,H=(0,i.useMemo)((()=>{var e;return(null===(e=t.parameters)||void 0===e?void 0:e.some((e=>{var t;return(null===(t=e.authType)||void 0===t?void 0:t.toLowerCase())===vt})))??!1}),[t]),K=null==Z?void 0:Z.context,Q=(0,i.useMemo)((()=>ts(K,g.activeContextId)),[g.activeContextId]),W=U($,K,Q),J=B(W),Y=(e,t,a,i)=>{const r=qo(e,t,a);Vt()(r,i)||n(r)},X=(0,i.useRef)(Zt()(Y,500)).current,ee=Lo(q,V),te=Uo(z,j,F),ae=Boolean(te.length),ne=Go(te,s),ie=!ne.isAssociatedWithApiLevel,re=c&&ae&&!ie&&!ne.isAssociatedWithCurrentVersionLevel,{onClick:oe,disableButton:se,buttonTextId:le,hideIcon:de}=lo({userInfo:$,entityActiveSubscriptions:L,billingPlans:D,selectedEndpoint:t,harObject:a,testEndpoint:async e=>{if(await es(k,!0))try{b(!0),ie&&await p();const t=await e();t.rawData=t.data,t.data=(new TextDecoder).decode(t.data),r(t)}catch{$t.ZP.error(h({id:"general-error-message"}))}finally{b(!1)}},isEntityHasAvailableApps:ae,isConnectionToDifferentApiVersionRequired:re,commonSegmentParams:P,selectedProjectData:ne});function ce(){var e;return k.getFieldValue(Gt)||(null==C||null===(e=C[0])||void 0===e?void 0:e.url)}function pe(){const e=k.getFieldValue(Bt);return ee.find((t=>t.id===e))||ee[0]}const ue=pe(),me=zo({rapidKey:k.getFieldValue(Mt),selectedGateway:ue,shouldUseCustomGatewaySelection:I,tenant:G,data:{apiId:j,selectedEndpoint:t,apiMetaData:e,appAuthorizations:R,publicDns:M,selectedAppAuthorization:w}}),ge={publicDns:M,selectedEndpoint:t,shouldUseCustomGatewaySelection:I,requestMediaType:A},ve=()=>{_([]),x(null),k.setFieldValue(Jt,null)},he=e=>{var t;const a="rapidapi"===(null===(t=e.type)||void 0===t?void 0:t.toLowerCase());if(!H||a)ve();else{const t=R.filter((t=>t.applicationId===s&&t.gateways.some((t=>t.id===e.id))));if(t.length){const e=t[0];k.setFieldValue(Jt,e.id),x(e),_(t)}else ve()}},ke=()=>{if(!H||!R.length)return ve(),void Y(k.getFieldsValue(),ge,me,a);const e=O()(ee,"id"),n=R.find((t=>t.gateways.length>0&&t.gateways.some((t=>e[t.id])))),i=null==n?void 0:n.gateways.find((t=>e[t.id])),r=i?e[i.id]:ee[0],o=po(r,M,t.route,G,ce());k.setFieldsValue({[Bt]:r.id,[Ut]:o}),n?(k.setFieldValue(Jt,n.id),x(n),he(r)):ve(),Y(k.getFieldsValue(),ge,me,a)};return(0,i.useEffect)((()=>{ke()}),[H]),(0,i.useEffect)((()=>{var e;k.setFieldValue(Gt,null==C||null===(e=C[0])||void 0===e?void 0:e.url)}),[C]),(0,i.useEffect)((()=>{const e=as(R,J,!(null==$||!$.id));k.setFieldsValue({[Lt]:s,[Mt]:e}),ke()}),[s]),(0,i.useEffect)((()=>{const e=pe(),n=po(e,M,t.route,G,ce());k.setFieldValue(Ut,n),Y(k.getFieldsValue(),ge,me,a)}),[t.id]),(0,i.useEffect)((()=>{Y(k.getFieldsValue(),ge,me,a)}),[A]),i.createElement(ns,{form:k,onFieldsChange:e=>{const n=e.reduce(((e,t)=>[...e,...t.name]),[]);if(n.includes(Bt)||n.includes(Gt))(()=>{const e=pe(),n=po(e,M,t.route,G,ce());k.setFieldValue(Ut,n),R.length?he(e):ve(),Y(k.getFieldsValue(),ge,me,a)})();else if(n.includes(Jt))x((()=>{var e;const t=k.getFieldValue(Jt)||(null===(e=y[0])||void 0===e?void 0:e.id);return y.find((e=>e.id===t))})());else{const e=k.getFieldsValue();X(e,ge,me,a)}}},i.createElement(ot,null,i.createElement(na,{name:t.name,method:t.method}),J&&i.createElement(tr,{disabled:se,loading:f,onClick:oe,textId:le,hideIcon:de})),i.createElement(is,{"data-id":"rest-endpoints-form"},i.createElement(Wi,{baseUrls:C,selectedBaseUrl:ce(),setIsForcePresentationalDataUpdate:d,isEntityHasAvailableApps:ae,isConnectionToDifferentApiVersionRequired:re,contextSelectData:{api:e,userContextTree:Z,userInfo:$},projectAcls:{enrichedProjects:te,onSelectedProjectChange:o,selectedProjectData:ne},gateways:ee,appAuthorizations:y,selectedAppAuthorization:w,selectedGateway:ue,selectedEndpoint:t,publicDns:M,tenant:G,apiWhitelistingData:{apiId:j,selectedApiVersionId:F},isViewAppKeys:J,isAuth2WithClientCredentialsEnabled:H}),!T()(t)&&i.createElement(io,{setRequestMediaType:N,endpointParameters:me,selectedEndpoint:t,isViewAppKeys:J})))}));var os=a(4038),ss=a.n(os),ls=a(44236),ds=a.n(ls),cs=a(66415),ps=a.n(cs),us=a(15886),ms=a.n(us);const gs=(e,t)=>vr()(xr()({statusCode:t}),kr()("format"),ds(),ms()(ko))(e),vs=e=>vr()(kr()("statusCode"),ds(),xr()(Number.isInteger),xr()((t=>((e,t)=>{var a;return(null===(a=gs(e,t))||void 0===a?void 0:a.length)>0})(e,t))),ps()((e=>e)))(e),hs=(e,t,a)=>bi()(e,{statusCode:t,format:a}),ks=(e,t,a)=>{const n=hs(e,t,a);return kr()("name")(null==n?void 0:n.examples)},fs=(e,t,a)=>{const n=(e=>{if(null!=e&&e.schema&&!T()(e.schema))return e.schema;if(null!=e&&e.body)try{return ss()(bn(e.body))}catch(e){return null}return null})(hs(e,t,a));try{return Pn(n)}catch(e){return n}},bs=(e,t,a,n)=>{var i;const r=hs(e,t,a);return null===(i=bi()(r.examples,{name:n}))||void 0===i?void 0:i.value},ys=(e,t,a)=>{const{headers:n}=hs(e,t,a);switch(typeof n){case"object":return n;case"string":return bn(n);default:return{}}},_s=(e,t,a)=>({schema:fs(e,t,a),headers:ys(e,t,a),exampleNames:ks(e,t,a),exampleResponse:hs(e,t,a)}),ws=e=>{const t=vs(e),a=(null==t?void 0:t.find((e=>e>=200&&e<300)))??t[0],n=gs(e,a)[0];return{defaultStatusCode:a,defaultMediaType:n,defaultExampleName:ks(e,a,n)[0]}};var xs=a(14277),Es=a(71474),As=a(84283);const Ns=o.default.div`
  height: 100%;
  overflow-y: auto;
  pre.code-highlighter {
    margin: unset !important;
    padding: unset !important;
    color: ${({theme:e})=>n.Z.extractColorFromTheme("@steps-title-process",e)}!important;
    text-shadow: none !important;
    code {
      color: ${({theme:e})=>n.Z.extractColorFromTheme("@steps-title-process",e)}!important;
      white-space: pre-wrap !important;
      word-break: break-all !important;
      text-shadow: none !important;
    }
    span {
      background: none !important;
    }
  }
`,Is=({codeString:e,language:t="json"})=>{if(!e)return null;const{search:a}=window.location,n=new URLSearchParams(a).get("mode");return i.createElement(Ns,null,i.createElement(Es.Z,{className:"code-highlighter",language:t,style:"dark"===n?As.pJ:As.MS,customStyle:{backgroundColor:"transparent",borderWidth:0,fontSize:"12px",overflow:"hidden auto",whiteSpace:"pre-wrap",wordBreak:"break-all",overflowWrap:"anywhere"}},e.replace(/\\n/g,"\n")))};var Ss=a(27124),Ps=a(16114);const Fs=({selectedSnippetLanguage:e,snippetString:t,selectedEndpoint:a})=>{const{context:n}=(0,i.useContext)(u),{formatMessage:r}=(0,Ee.Z)(),o=ri(n.activeContextId),s=(0,i.useCallback)((()=>{$t.ZP.success(r({id:"copied-to-clipboard"})),Jn({event:"Code Snippet Copied",properties:{...o,snippet_language:e,endpoint:a.name}})}),[t]);return i.createElement(kn(),{text:t,onCopy:s},i.createElement(ee.Z,{size:"small",type:"link",icon:i.createElement(vn.Z,{"aria-label":"copy code snippet"})},r({id:"copy-code"})))};var Cs=a(20924);const qs=({selectedSnippetLanguage:e,snippetString:t})=>{const{formatMessage:a}=(0,Ee.Z)(),n=E("replitVisibility"),r=ke()(e,"language");return n?i.createElement(ee.Z,{className:"capitalize",size:"small",type:"link",icon:i.createElement(Cs.Z,null),onClick:()=>{window.open(encodeURI(`https://repl.it/languages/${r}?code=${t}`),"_blank")}},a({id:"run-on-repl-it"})):null},Ds=o.default.div`
  padding-bottom: 8px;
`,Ts=({handleLanguageSelection:e,selectedSnippetLanguage:t})=>i.createElement(Ps.Z,{overlay:()=>(e=>{const{SubMenu:t}=Ss.Z;return i.createElement(Ss.Z,null,Po.map((a=>i.createElement(t,{key:a.key,title:i.createElement(Ce.Z,null,a.title)},a.clients.map((t=>i.createElement(Ss.Z.Item,{key:t.key,onClick:()=>{"function"==typeof e&&e(t)}},i.createElement(ca.Z,{placement:"right",title:t.description,mouseLeaveDelay:0},i.createElement(Ce.Z,null,t.title)))))))))})(e)},i.createElement(ee.Z,{size:"small"},i.createElement(Ce.Z,null,`(${t.parentTitle}) ${t.title}`),i.createElement(je.Z,null))),js=({selectedSnippetLanguage:e,handleLanguageSelection:t,snippetString:a,selectedEndpoint:n})=>i.createElement(Ds,null,i.createElement(Ts,{selectedSnippetLanguage:e,handleLanguageSelection:t}),i.createElement(qs,{selectedSnippetLanguage:e,snippetString:a}),i.createElement(Fs,{selectedSnippetLanguage:e,snippetString:a,selectedEndpoint:n})),{extractColorFromTheme:Os}=n.Z,Vs=o.default.div`
  width: 100%;
  height: 100%;
  padding: 8px 15px 0 15px;
  display: flex;
  flex-direction: column;

  .capitalize {
    text-transform: capitalize;
  }
`,zs=(o.default.div`
  padding: 0 31px;
  max-height: 450px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.36;
  color: ${({theme:e})=>Os("@rapid-b",e)};
  margin-bottom: 10px;
  & a {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    color: ${({theme:e})=>Os("@primary-color",e)};
  }
  .code {
    white-space: pre-wrap;
    pre {
      display: block;
      border-radius: 4px;
      background-color: ${({theme:e})=>Os("@rapid-d",e)} !important;
      border: solid 1px ${({theme:e})=>Os("@rapid-l",e)} !important;
      font-size: 12px;
      padding: 10px 11px 9px 14px;
      color: ${({theme:e})=>Os("@rapid-b",e)};
      line-height: 1.58;
      margin: 10px 0 20px 0;
      max-width: 100%;
      overflow-x: auto;
    }
  }
`,({harObject:e={},selectedEndpoint:t})=>{if(!E("playgroundCodeSnippetVisibility"))return i.createElement(xs.Z,null);const[a,n]=(0,i.useState)(Fo),[r,o]=(0,i.useState)(void 0);(0,i.useEffect)((()=>{if(e.error)o(void 0);else try{let t;const n=e.postData.mimeType===go;if(n&&e.postData.text){const a=lt()(e);a.postData.text="<file contents here>",t=Co(a)}else t=Co(e);const i=t.convert(a.parentKey,a.key,{indent:"\t",binary:n});o(i)}catch{o(void 0)}return()=>{o(void 0)}}),[e,a]);const s=()=>r?i.createElement(Is,{codeString:r,language:a.language}):i.createElement(xs.Z,null);return i.createElement(Vs,null,i.createElement(js,{selectedSnippetLanguage:a,handleLanguageSelection:e=>{n(e)},snippetString:r,selectedEndpoint:t}),e.error?i.createElement(xs.Z,null):i.createElement(s,null))});var Zs=a(60331),$s=a(83301),Ls=a(55420),Rs=a.n(Ls);const{extractColorFromTheme:Ms}=n.Z,Bs=o.default.div`
  > * {
    color: ${({theme:e})=>Ms("@text-color",e)};
    white-space: normal;
  }
`,Us=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Gs=(e,t)=>Us.test(e)?e:Rs()(t).toString("base64"),Hs=({responseObject:e,selectedExampleBody:t})=>{const{formatMessage:a}=(0,Ee.Z)();if(!e)return null;const{body:n="",format:r,headers:o,rawData:s}=e,l=t||n;let d;o&&"object"==typeof o?d=o:o&&"string"==typeof o&&(d=bn(o));return(e=>{if(!e)return i.createElement(xs.Z,null);let t=e;if("string"!=typeof l&&("TEXT"===t.toUpperCase()||t.includes("text/html")||t.includes("text/plain"))&&(t="JSON"),t.includes("image")){const e=(l||"").includes("data:image")?l||"":`data:image/png;base64, ${Gs(l,s)||""}`;return i.createElement("img",{style:{width:"100%"},src:e,alt:"response"})}if(t.includes("audio")){const e=(l||"").includes("data:audio/mpeg;base64")?l||"":`data:audio/mpeg;base64, ${Gs(l,s)||""}`;return i.createElement("div",null,i.createElement("audio",{controls:!0,src:e},"Your browser does not support the",i.createElement("code",null,"audio")," ","element."))}if("JSON"===t||t.includes("json"))return i.createElement(Nn,{src:l});if("XML"===t||t.includes("xml"))return i.createElement("div",{className:"notranslate",translate:"no"},i.createElement($s.Z,{xml:l}));if(l){const e=Ge(l),t=He(e);return i.createElement(Bs,{className:"notranslate",translate:"no",dangerouslySetInnerHTML:{__html:t}})}return i.createElement(xs.Z,{description:a({id:"no-example-response"})})})(ke()(d,"content-type")||r)},Ks=({headers:e})=>{if(!e)return null;const t=JSON.stringify(e,null,2);return i.createElement(Is,{codeString:t})},{extractColorFromTheme:Qs}=n.Z,Ws=o.default.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>Qs("@okinatako-background-primary",e)};
  color: ${({theme:e})=>Qs("@text-color",e)};
  padding: 8px 15px 0 15px;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  .ant-tabs-content {
    height: 100%;
  }
  .scrollable {
    height: 100%;
    overflow-y: auto;
  }
  &.standalone {
    /* when not in standalone mode, there's already margin from the above element */
    margin-top: 8px;
  }

  .response-description {
    color: ${({theme:e})=>Qs("@text-color",e)};
    margin-top: 16px;
  }
  .example-responses-codes-list {
    margin-left: 10px;
    width: 70px;
  }
  .example-responses-list {
    margin-top: 8px;
  }
`,{TabPane:Js}=un.Z,Ys=({displayHeader:e=!0,responseObject:t})=>{const{formatMessage:a}=(0,Ee.Z)();if(!t)return i.createElement(Ws,null,i.createElement("div",{className:"content"},a({id:"empty-response-result-message"})));const{data:n,headers:r,status:s,statusText:l}=t,[d,c]=((e,t)=>{const a=["transparent",t||""];return e&&{1:["@rapid-m",t||"Informational"],2:["@rapid-n",t||"Success"],3:["@rapid-p",t||"Redirection"],4:["@rapid-o",t||"Client Error"],5:["@rapid-o",t||"Server Error"]}[String(e).charAt(0)]||a})(s,l);return i.createElement(Ws,null,e&&i.createElement(_e,null,i.createElement("div",{className:"header inner-section"},i.createElement("span",{className:"bold"},a({id:"results"})))),i.createElement("div",{"data-id":"response-status"},i.createElement(o.ThemeConsumer,null,(e=>i.createElement(Zs.Z,{color:ke()(e,d)},s))),i.createElement(Ce.Z,null,c)),i.createElement(un.Z,{animated:!1},i.createElement(Js,{key:"body",tab:a({id:"body"})},i.createElement("div",{className:"scrollable"},i.createElement(Hs,{responseObject:"object"==typeof t?{...t,body:n}:{}}))),i.createElement(Js,{key:"headers",tab:a({id:"headers"})},i.createElement("div",{className:"scrollable"},i.createElement(Ks,{headers:r})))))},Xs=i.memo(Ys),{TabPane:el}=un.Z,tl=({exampleResponses:e})=>{const{defaultStatusCode:t,defaultMediaType:a,defaultExampleName:n}=ws(e),{formatMessage:r}=(0,Ee.Z)(),[o,s]=(0,i.useState)(t),[l,d]=(0,i.useState)(a),[c,p]=(0,i.useState)(n),u=(e,t,a)=>{s(e),d(t),p(a)};if(!((e,t,a,n)=>{const i=hs(e,t,a);return i&&!!bi()(i.examples,{name:n})})(e,o,l,c)){const{defaultStatusCode:t,defaultMediaType:a,defaultExampleName:n}=ws(e);return u(t,a,n),i.createElement(be.Z,{active:!0})}const m=i.useMemo((()=>vs(e)),[e]),{mediaTypes:g,bodyToDisplay:v,example:{schema:h,exampleNames:k,exampleResponse:f,headers:b}}=i.useMemo((()=>({mediaTypes:gs(e,o),bodyToDisplay:bs(e,o,l,c),example:_s(e,o,l)})),[e,c,l,o]);return i.createElement(Ws,null,i.createElement(zn.Z,{justify:"start",align:"middle",className:"dropdown-selections-row"},i.createElement(Zn.Z,{span:8},i.createElement(dr,{value:o,options:m.map((e=>({key:e,value:e,display:e}))),onChange:t=>{const a=gs(e,t)[0],n=ks(e,t,a)[0];u(t,a,n)},className:"response-status-codes-dropdown",label:r({id:"status-codes"})})),(null==g?void 0:g.length)>1&&i.createElement(Zn.Z,{span:8},i.createElement(dr,{value:l,options:g.map((e=>({key:e,value:e,display:ho[e]}))),onChange:t=>{const a=ks(e,o,t)[0];u(o,t,a)},className:"response-media-types-dropdown",label:r({id:"media-types"})})),(null==k?void 0:k.length)>1&&i.createElement(Zn.Z,{span:8},i.createElement(dr,{value:c,options:k.map((e=>({key:e,value:e,display:e}))),onChange:p,className:"response-examples-dropdown",label:r({id:"example"})}))),i.createElement("div",{className:"response-description"},f.description),i.createElement(un.Z,{animated:!1,className:"response-tabs"},i.createElement(el,{key:"body",tab:r({id:"body"}),classNmae:"body-tab"},i.createElement("div",{className:"scrollable"},i.createElement(Hs,{responseObject:f,selectedExampleBody:v}))),!T()(h)&&i.createElement(el,{key:"schema",tab:r({id:"schema"}),classNmae:"schema-tab"},i.createElement("div",{className:"scrollable"},i.createElement(Nn,{src:h,highlightRequired:!0}))),!T()(b)&&i.createElement(el,{key:"headers",tab:r({id:"headers"}),classNmae:"headers-tab"},i.createElement("div",{className:"scrollable"},i.createElement(Ks,{headers:b})))))};tl.propTypes={exampleResponses:X().arrayOf(X().shape({apiEndpoint:X().string,body:X().string,description:X().string,format:X().string,headers:X().string,id:X().string.isRequired,name:X().string.isRequired,schema:X().shape,statusCode:X().number.isRequired,type:X().string,examples:X().arrayOf(X().object).isRequired})).isRequired};const al=i.memo(tl),{extractColorFromTheme:nl}=n.Z,il=o.default.div`
  .ant-tabs,
  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-content-holder {
    overflow-y: auto;
    flex: 1;
  }

  .inner-section {
    &.space-between {
      display: flex;
      justify-content: space-between;
    }
    border-bottom: 1px solid ${({theme:e})=>nl("@okinatako-border-default",e)};
    background-color: ${({theme:e})=>nl("@okinatako-background-secondary",e)};

    .notifications {
      padding: 0 15px;
    }
  }
  .header {
    height: 60px;
    padding: 0 15px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .ant-tabs-ink-bar {
      /* A fix for the right section tabs in the full playground composition */
      height: 2px;
      bottom: -5px;
    }
    .bold {
      font-weight: bold;
    }
    .endpoint-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .endpoint-test-button {
      margin-left: auto;
    }
  }
`;function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},rl.apply(this,arguments)}o.default.div`
  height: 100%;
  overflow-y: auto;
  pre.code-highlighter {
    margin: unset !important;
    padding: unset !important;
    color: ${({theme:e})=>nl("@steps-title-process",e)}!important;
    text-shadow: none !important;
    code {
      color: ${({theme:e})=>nl("@steps-title-process",e)}!important;
      white-space: pre-wrap !important;
      word-break: break-all !important;
      text-shadow: none !important;
    }
    span {
      background: none !important;
    }
  }
`,o.default.div`
  .help-dropdown {
    margin-right: 16px;
  }
`,o.default.div`
  .avatar {
    margin-right: 8px;
  }
  .description {
    display: inline-block !important;
  }
  .question-body {
    margin-top: 16px;
    min-height: 100px;
  }
`,o.default.div`
  .dropdown {
    .dropdown-label {
      margin-left: 1px;
      margin-bottom: 4px;
    }
    .ant-select {
      width: 80%;
    }
  }
`;const{TabPane:ol}=un.Z,sl=({harObject:e,realResponse:t,selectedEndpoint:a,apiActionsBar:n})=>{const{formatMessage:r}=(0,Ee.Z)(),[o,s]=(0,i.useState)(),l=i.useMemo((()=>{return e=a.responsePayloads,kr()((e=>({...e,format:e.format.toUpperCase(),statusCode:e.statusCode||200,examples:T()(e.examples)?[{id:1,name:e.name,value:e.body}]:e.examples})))(e);var e}),[a.responsePayloads]),d=E("playgroundCodeSnippetVisibility");return(0,i.useEffect)((()=>{s(d?"snippets":"results")}),[a.id]),(0,i.useEffect)((()=>{t&&s("results")}),[t]),i.createElement(il,{style:{height:"100%",overflow:"hidden"},"data-id":"right-section"},i.createElement(un.Z,{activeKey:o,onChange:s,renderTabBar:(e,t)=>i.createElement("div",{className:"header inner-section",style:{marginBottom:15,justifyContent:"space-between"}},i.createElement(t,rl({},e,{style:{height:"100%",margin:0}})),i.createElement(Ri.Z,null,n))},d&&i.createElement(ol,{key:"snippets",tab:r({id:"code-snippets"})},i.createElement(zs,{harObject:e,selectedEndpoint:a})),!T()(l)&&i.createElement(ol,{key:"examples",tab:r({id:"example-responses"})},i.createElement(al,{exampleResponses:l})),i.createElement(ol,{disabled:d&&!t,key:"results",tab:r({id:"results"})},i.createElement(Xs,{responseObject:t,displayHeader:!1}))))};var ll=a(33049),dl=a(43347),cl=a(89366);const pl=o.default.div`
  .help-dropdown {
    margin-right: 16px;
  }
`,ul=o.default.div`
  .avatar {
    margin-right: 8px;
  }
  .description {
    display: inline-block !important;
  }
  .question-body {
    margin-top: 16px;
    min-height: 100px;
  }
`,ml={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"PostMessage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"message"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"MessageCreateInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postMessage"},arguments:[{kind:"Argument",name:{kind:"Name",value:"message"},value:{kind:"Variable",name:{kind:"Name",value:"message"}}}],directives:[]}]}}],loc:{start:0,end:96,source:{body:"\n  mutation PostMessage($message: MessageCreateInput!) {\n    postMessage(message: $message)\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},gl="contactProvider",vl="newDiscussion",hl="reportRapidAPI",kl=({selectedApi:e,statusCode:t,selectedEndpoint:a})=>{const{context:n}=(0,i.useContext)(u),{formatMessage:r}=(0,Ee.Z)(),[o,s]=(0,i.useState)(!1),[l,d]=(0,i.useState)(void 0),[p,m]=(0,i.useState)(!1),g=(0,Yn.x)(),{entityById:v}=g.cache.readQuery({query:Ta,variables:{entityID:n.activeContextId}}),h=()=>{s(!1),d(void 0)},[k]=(0,xa.D)(ml,{onCompleted:()=>{$t.ZP.success(r({id:"message_sent_to_provider"})),h(),m(!1)},onError:()=>{$t.ZP.error(r({id:"message_failed"})),h(),m(!1)}}),f=i.createElement(Ss.Z,{onClick:n=>{switch(n.key){case gl:s(!0);break;case vl:(0,c.WI)("discussionsRedirect",{dev:e.owner.slugifiedName,apiSlugifiedName:e.slugifiedName,section:"discussions"});break;case hl:(0,c.WI)("reportApiIssue",{email:v.email,username:v.username,apiName:e.name,apiSlug:e.slugifiedName,providerUsername:e.owner.slugifiedName,errorCode:t,endpointMethod:a.method,endpointName:a.name,endpointPath:a.route})}}},M(v.id)&&i.createElement(Ss.Z.Item,{key:gl,icon:i.createElement(dl.Z,null)},r({id:"contact_api_provider"})),i.createElement(Ss.Z.Item,{key:vl,icon:i.createElement(cl.Z,null)},r({id:"post_new_discussion"})),i.createElement(Ss.Z.Item,{key:hl,icon:i.createElement(Mi.Z,null)},r({id:"report_issue_to_rapidapi"})));return i.createElement(pl,null,i.createElement(Ps.Z,{overlay:f,trigger:["click"],className:"help-dropdown"},i.createElement(ee.Z,null,r({id:"get_help"}),i.createElement(je.Z,null))),i.createElement($e.Z,{className:"contact-provider-modal",title:!1,open:o,onOk:()=>{m(!0);const t={messageType:"support",message:{body:l,apiId:e.id,ownerDisplayName:e.owner.name,entityDisplayName:v.username,apiDisplayName:e.name,ownerId:Number(e.owner.id),entityId:Number(v.id)}};k({variables:{message:t}})},onCancel:h,centered:!0,okText:r({id:"ok_button_text"}),cancelText:r({id:"cancel_button_text"}),okButtonProps:{loading:p}},i.createElement(ul,null,i.createElement(ll.C,{className:"avatar",src:v.thumbnail,size:40,icon:i.createElement(cl.Z,null)}),i.createElement("p",{className:"description"},r({id:"discussions_question_title"},{developer:v.username})),i.createElement(Ae.Z.TextArea,{disabled:p,className:"question-body",rows:4,value:l,onChange:e=>d(e.target.value),placeholder:r({id:"question_body"})}))))};var fl=a(19671),bl=a(73359);const yl={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"exportOpenApi"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apiId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"exportOpenApi"},arguments:[{kind:"Argument",name:{kind:"Name",value:"apiId"},value:{kind:"Variable",name:{kind:"Name",value:"apiId"}}}],directives:[]}]}}],loc:{start:0,end:75,source:{body:"\n  query exportOpenApi($apiId: ID!) {\n    exportOpenApi(apiId: $apiId)\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},_l=({apiId:e})=>{const{formatMessage:t}=(0,Ee.Z)(),[a,{loading:n}]=(0,bl.t)(yl,{fetchPolicy:"no-cache",onCompleted:({exportOpenApi:t})=>{(({exportObj:e,exportName:t,contentType:a="text/json; charset=utf-8"})=>{try{const n=a.includes("x-yaml")?"yaml":"json",i="json"===n?JSON.stringify(e,void 0,2):e,r=`data:text/${n},${encodeURIComponent(i)}`,o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download",`${t}.${n}`),document.body.appendChild(o),o.click(),o.remove()}catch(e){return!1}})({exportObj:t,exportName:e,contentType:"text/json; charset=utf-8"})},onError:()=>{$t.ZP.error(t({id:"download-api-spec-failed"}))}});return i.createElement(ee.Z,{className:"capitalize",size:"small",onClick:()=>{a({variables:{apiId:e}})},type:"link",loading:n,icon:i.createElement(fl.Z,null)},t({id:"download-api-spec"}))};var wl=a(47760);const xl=()=>{const{formatMessage:e}=(0,Ee.Z)();return i.createElement(ee.Z,{className:"capitalize",size:"small",onClick:()=>{(0,c.WI)("spotlightsRedirect")},type:"link",icon:i.createElement(wl.Z,null)},e({id:"search_api_specs"}))},El=({apiId:e,apiSubType:t})=>{const a=E("allowDownloadSwaggerFileOnMarketplace"),n=E("playgroundCodeSnippetVisibility");return a&&n?"soap"===t?i.createElement(xl,null):i.createElement(_l,{apiId:e}):null},Al=({selectedApi:e,hasError:t,statusCode:a,selectedEndpoint:n})=>{const{selectedVersion:r}=(0,i.useContext)(S);return i.createElement("div",{className:"header inner-section",style:{display:"flex",alignItems:"center"}},i.createElement(El,{apiId:e.id,apiSubType:r.apiSubType}),t&&i.createElement(kl,{selectedApi:e,statusCode:a,selectedEndpoint:n}))};a(15742);const Nl=function({selectedEndpointIdByHost:e,api:t,isMultiVersioning:a}){const n=(0,i.useRef)(400),[r,o]=(0,i.useState)({}),[s,l]=(0,i.useState)(null),[d,p]=(0,i.useState)({}),[u,m]=(0,i.useState)();return i.createElement(ve,{orientation:"vertical"},i.createElement(ge,{size:400,onStopResize:({domElement:e})=>{u||(n.current=e.clientWidth)},collapsibleReflexLastLocation:n,minSize:15,maxSize:u,setMaxSize:m,name:"endpoints panel"},i.createElement(jt,{billingFeatures:t.billingFeatures,selectedEndpointIdByHost:e,selectedEndpoint:r,handleEndpointSelection:e=>{(0,c.WI)("endpointSelection",{endpointId:e.id}),o(e)}})),i.createElement(H.nN,null),i.createElement(J,null,i.createElement(rs,{api:t,selectedEndpoint:r,harObject:d,setHarObject:p,setResponseFromEndpoint:l,isMultiVersioning:a})),i.createElement(H.nN,null),i.createElement(J,null,i.createElement(sl,{harObject:d,selectedEndpoint:r,realResponse:s,apiActionsBar:i.createElement(Al,{selectedApi:t,hasError:null==s?void 0:s.error,statusCode:null==s?void 0:s.status,selectedEndpoint:r})})))};var Il=a(9726);const{extractColorFromTheme:Sl}=n.Z,Pl=o.default.div`
  height: 60px;
  padding: 9px 15px 9px 10px;
  background-color: ${({theme:e})=>Sl("@okinatako-background-secondary",e)};
  border-bottom: 1px solid ${({theme:e})=>Sl("@okinatako-border-default",e)};
  * {
    background-color: ${({theme:e})=>Sl("@okinatako-input-primary",e)};
    border-color: ${({theme:e})=>Sl("@okinatako-border-default",e)};
  }
  svg {
    stroke: ${({theme:e})=>Sl("@okinatako-content-primary",e)};
    width: 18px;
  }
  input {
    width: 100%;
    background-color: ${({theme:e})=>Sl("@okinatako-input-primary",e)};
    color: ${({theme:e})=>Sl("@okinatako-content-primary",e)};
    ::placeholder {
      color: ${({theme:e})=>Sl("@okinatako-content-primary",e)};
    }
    font-size: inherit;
    font-size: 14px;
  }
`,Fl=o.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,Cl=(o.default.div`
  height: 36px;
  position: relative;
`,o.default.div`
  height: 100%;
  overflow-y: auto;
  background-color: ${({theme:e})=>Sl("@okinatako-background-primary",e)};
  div,
  .field-name {
    color: ${({theme:e})=>Sl("@okinatako-content-primary",e)};
  }
  polygon {
    fill: ${({theme:e})=>Sl("@okinatako-content-primary",e)};
  }
`);function ql({handleEndpointSelection:e}){const{selectedVersion:t}=(0,i.useContext)(S),{loading:a,error:n,previousData:r}=(0,v.a)(It,{variables:{apiVersionId:t.id},onCompleted:t=>{const{apiVersion:a}=t,n=xt(a);e(n.endpoints[0])},onError:e=>{throw e}});if(a&&!r)return i.createElement(xe,{loading:!0});if(n)throw n;return i.createElement(Fl,null,i.createElement(Pl,null,i.createElement(gi.SearchBox,null)),i.createElement(Cl,null,i.createElement("div",{className:"notranslate",translate:"no"},i.createElement(gi.GraphDocs,null))))}const Dl=(0,i.memo)(ql),Tl=Xo((function({api:e,selectedEndpoint:t,harObject:a,setHarObject:n,setResponseFromEndpoint:r,setSelectedProjectAclID:o,selectedProjectAclID:s,formData:l,setIsForcePresentationalDataUpdate:d,isMultiVersioning:c,connectProjectToVersion:p}){var m;const{context:g}=(0,i.useContext)(u),{selectedVersion:v}=(0,i.useContext)(S),{formatMessage:h}=(0,Ee.Z)(),[k]=ns.useForm(),[f,b]=(0,i.useState)(!1),[y,_]=(0,i.useState)([]),[w,x]=(0,i.useState)(null),[A,N]=(0,i.useState)(null),I=E("showAPIGatewayService"),P=ri(g.activeContextId),F=v.id,C=null==v||null===(m=v.targetGroup)||void 0===m?void 0:m.targetUrls,{gateways:q,billingPlans:D,id:j}=e,{envGateways:V,projectAcls:z,userContextTree:Z,userInfo:$,entityActiveSubscriptions:L,appAuthorizations:R,publicDns:M,tenant:G}=l,H=(0,i.useMemo)((()=>{var e;return(null===(e=t.parameters)||void 0===e?void 0:e.some((e=>{var t;return(null===(t=e.authType)||void 0===t?void 0:t.toLowerCase())===vt})))??!1}),[t]),K=null==Z?void 0:Z.context,Q=(0,i.useMemo)((()=>ts(K,g.activeContextId)),[g.activeContextId]),W=U($,K,Q),J=B(W),Y=(e,t,a,i)=>{const r=qo(e,t,a);Vt()(r,i)||n(r)},X=(0,i.useRef)(Zt()(Y,500)).current,ee=Lo(q,V),te=Uo(z,j,F),ae=Boolean(te.length),ne=Go(te,s),ie=!ne.isAssociatedWithApiLevel,re=c&&ae&&!ie&&!ne.isAssociatedWithCurrentVersionLevel,{onClick:oe,disableButton:se,buttonTextId:le,hideIcon:de}=lo({userInfo:$,entityActiveSubscriptions:L,billingPlans:D,selectedEndpoint:t,harObject:a,testEndpoint:async e=>{if(await es(k,!0))try{b(!0),ie&&await p();const t=(k.getFieldValue(Yt)??[]).filter((({file:e})=>!Ct()(e))),a=await e(t);a.rawData=a.data,a.data=(new TextDecoder).decode(a.data),r(a)}catch{$t.ZP.error(h({id:"general-error-message"}))}finally{b(!1)}},isEntityHasAvailableApps:ae,isConnectionToDifferentApiVersionRequired:re,commonSegmentParams:P,selectedProjectData:ne});function ce(){return k.getFieldValue(Mt)}function pe(){var e;return k.getFieldValue(Gt)||(null==C||null===(e=C[0])||void 0===e?void 0:e.url)}function ue(){const e=k.getFieldValue(Bt);return ee.find((t=>t.id===e))||ee[0]}const me=ue(),ge=zo({rapidKey:ce(),selectedGateway:me,shouldUseCustomGatewaySelection:I,tenant:G,data:{apiId:j,selectedEndpoint:t,apiMetaData:e,appAuthorizations:R,publicDns:M}}),ve={publicDns:M,selectedEndpoint:t,shouldUseCustomGatewaySelection:I,requestMediaType:A},he=()=>{_([]),x(null),k.setFieldValue(Jt,null)},ke=e=>{var t;const a="rapidapi"===(null===(t=e.type)||void 0===t?void 0:t.toLowerCase());if(!H||a)he();else{const t=R.filter((t=>t.applicationId===s&&t.gateways.some((t=>t.id===e.id))));if(t.length){const e=t[0];k.setFieldValue(Jt,e.id),x(e),_(t)}else he()}},fe=()=>{if(!H||!R.length)return he(),void Y(k.getFieldsValue(),ve,ge,a);const e=O()(ee,"id"),n=R.find((t=>t.gateways.length>0&&t.gateways.some((t=>e[t.id])))),i=null==n?void 0:n.gateways.find((t=>e[t.id])),r=i?e[i.id]:ee[0],o=po(r,M,t.route,G,pe());k.setFieldsValue({[Bt]:r.id,[Ut]:o}),n?(k.setFieldValue(Jt,n.id),x(n),ke(r)):he(),Y(k.getFieldsValue(),ve,ge,a)};return(0,i.useEffect)((()=>{fe()}),[H]),(0,i.useEffect)((()=>{var e;k.setFieldValue(Gt,null==C||null===(e=C[0])||void 0===e?void 0:e.url)}),[C]),(0,i.useEffect)((()=>{X(k.getFieldsValue(),ve,ge,a)}),[A,s,t.id]),(0,i.useEffect)((()=>{const e=ue(),a=po(e,M,t.route,G,pe()),n=as(R,J,!(null==$||!$.id));k.setFieldsValue({[Lt]:s,[Mt]:n,[Ut]:a}),fe()}),[s,R]),i.createElement(ns,{form:k,onValuesChange:(n,i)=>{Bt in n||Gt in n?(()=>{const n=ue(),i=po(n,M,t.route,G,pe());k.setFieldValue(Ut,i);const r=zo({rapidKey:ce(),selectedGateway:n,shouldUseCustomGatewaySelection:I,tenant:G,data:{apiId:j,selectedEndpoint:t,apiMetaData:e,appAuthorizations:R,publicDns:M}});R.length?ke(n):he(),Y(k.getFieldsValue(),ve,r,a)})():Jt in n?x((()=>{var e;const t=k.getFieldValue(Jt)||(null===(e=y[0])||void 0===e?void 0:e.id);return y.find((e=>e.id===t))})()):X(i,ve,ge,a)}},i.createElement(ot,null,i.createElement(na,{name:t.name,method:t.method}),J&&i.createElement(tr,{disabled:se,loading:f,onClick:oe,textId:le,hideIcon:de})),i.createElement(is,null,i.createElement(Wi,{baseUrls:C,selectedBaseUrl:pe(),setIsForcePresentationalDataUpdate:d,isEntityHasAvailableApps:ae,isConnectionToDifferentApiVersionRequired:re,contextSelectData:{api:e,userContextTree:Z,userInfo:$},projectAcls:{enrichedProjects:te,onSelectedProjectChange:o,selectedProjectData:ne},gateways:ee,selectedGateway:me,selectedEndpoint:t,publicDns:M,tenant:G,apiWhitelistingData:{apiId:j,selectedApiVersionId:F},isViewAppKeys:J,appAuthorizations:y,selectedAppAuthorization:w,isAuth2Enabled:H}),!T()(t)&&i.createElement(io,{setRequestMediaType:N,endpointParameters:ge,selectedEndpoint:t,isViewAppKeys:J})))})),jl=({api:e,apiVersion:t,isMultiVersioning:a})=>{var n;const r=(0,i.useRef)(400),[s,l]=(0,i.useState)({}),[d,c]=(0,i.useState)(null),[p,u]=(0,i.useState)({}),[m,g]=(0,i.useState)(),v=(null==s||null===(n=s.graphQLSchema)||void 0===n?void 0:n.schema)||{};return i.createElement(o.ThemeProvider,{theme:Il.Wb},i.createElement(gi.SchemaContextProvider,{src:v},i.createElement(ve,{orientation:"vertical"},i.createElement(ge,{size:400,onStopResize:({domElement:e})=>{m||(r.current=e.clientWidth)},collapsibleReflexLastLocation:r,minSize:15,maxSize:m,setMaxSize:g,name:"graphql docs panel"},i.createElement(Dl,{selectedEndpoint:s,handleEndpointSelection:l})),i.createElement(H.nN,null),i.createElement(J,null,i.createElement(Tl,{api:e,apiVersion:t,selectedEndpoint:s,harObject:p,setHarObject:u,setResponseFromEndpoint:c,isMultiVersioning:a})),i.createElement(H.nN,null),i.createElement(J,null,i.createElement(sl,{harObject:p,selectedEndpoint:s,realResponse:d,apiActionsBar:i.createElement(Al,{selectedApi:e,hasError:null==d?void 0:d.error,statusCode:null==d?void 0:d.status,selectedEndpoint:s})})))))};var Ol=a(48403),Vl=a.n(Ol),zl=a(40847);const Zl="deprecated",{extractColorFromTheme:$l}=n.Z,Ll=o.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  padding: 10px 15px;
  height: 60px;
  color: ${({theme:e})=>$l("@okinatako-content-primary",e)};
  background-color: ${({theme:e})=>$l("@okinatako-background-secondary",e)};
  border-bottom: 1px solid ${({theme:e})=>$l("@okinatako-border-default",e)};
`,Rl=o.default.div`
  display: flex;
  position: relative;
  position: relative;
  max-width: 270px;
  min-width: 270px;
  .versions-info {
    flex: 0 1 auto;
    padding: 0 4px 0 0;
    display: flex;
    align-items: center;
  }
  .versions-info-icon {
    font-size: 12px;
    color: ${({theme:e})=>$l("@primary-color",e)};
  }

  .versions-select {
    flex: 1 0 auto;
    display: flex;
    text-align: left;
    margin-right: 15px;
    align-items: center;
    .ant-select-selector {
      border-radius: 4px;
    }
  }
`,Ml=(0,o.default)(ee.Z)`
  margin-right: 10px;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: ${({selected:e,theme:t})=>$l(e?"@ui-lib-content-selected":"@okinatako-content-secondary",t)} !important;
  background-color: ${({selected:e,theme:t})=>e?$l("@ui-lib-background-selected",t):"transparent"} !important;
  border-radius: 6px !important;
  &:last-of-type {
    margin-right: 40px;
  }
  &:hover {
    opacity: 0.8;
  }
  `,{Option:Bl}=Za.Z,Ul=({apiId:e,versions:t,selectedVersionId:a,currentVersionId:n,fetchVersions:r,projectAcls:o,activeViewMode:s,onChangeViewMode:l})=>{const d=E("assets"),{context:c}=(0,i.useContext)(u),{selectedVersion:p,setSelectedVersion:m}=(0,i.useContext)(S),{formatMessage:g}=(0,Ee.Z)(),v=(0,i.useMemo)((()=>z()(t,"createdAt","desc")),[t]),h=(0,i.useMemo)((()=>{if(T()(c))return!1;const t=v.find((e=>e.id===n));return v.reduce(((t,a)=>[...t,...Uo(o,e,a.id)]),[]).some((e=>e.isAssociatedWithCurrentVersionLevel))&&+new Date(p.createdAt)>+new Date(t.createdAt)}),[c,p]);if((0,i.useEffect)((()=>{const t=((e,t,a,n,i)=>{const r=((e,t)=>e?e.reduce(((e,{Project:a})=>{if(a){const n=a.projectAllowedAPIs.find((e=>e.apiId===t));if(n){const t={name:a.name,apiVersionId:n.apiVersionId};return{...e,[t.apiVersionId]:t}}}return e}),{}):{})(i,e),o=n.find((e=>r[e.id])),s=n.find((e=>e.id===a));return o||s||n[0]})(e,0,n,v,o);m(t)}),[c.activeContextId]),!a)return null;if(!d&&1===t.length)return null;const{endpoints:k=[],assets:f=[]}=p;return i.createElement(Ll,null,!d&&i.createElement("span",{style:{padding:"0 15px",fontSize:"16px"}},g({id:"version-test_label"})),i.createElement(Rl,null,h?i.createElement("div",{className:"versions-info"},i.createElement(ca.Z,{placement:"top",title:g({id:"version-test_tooltip"})},i.createElement(zl.Z,{className:"versions-info-icon"}))):null,i.createElement(Za.Z,{"data-id":"version-dropdown-select",className:"versions-select",loading:r,disabled:t.length<2||r,placeholder:g({id:"version-test_tooltip"}),showArrow:!0,onChange:function(e){const a=t.find((t=>t.id===e));m(a)},value:a},t.map((({id:e,name:t,versionStatus:a})=>i.createElement(Bl,{key:e,value:e},function(e,t,a){switch(a){case"active":return e===n?`${Vl()(t)} (${Vl()(g({id:"current"}))})`:Vl()(t);case Zl:return`${Vl()(t)} (${Vl()(g({id:"deprecated"}))})`;default:return Vl()(t)}}(e,t,a)))))),d&&!!k.length&&!!f.length&&i.createElement(i.Fragment,null,i.createElement(Ml,{selected:s===bo,onClick:()=>l(bo)},Vl()(bo)),i.createElement(Ml,{selected:s===yo,onClick:()=>l(yo)},Vl()(yo))))},Gl=o.default.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }
`,Hl=e=>{const t={};return e.filter((e=>{if("FragmentDefinition"!==e.kind)return!0;const a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))},Kl={kind:"Document",definitions:Hl([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"apiVersions"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apiId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiVersions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"apiId"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"apiId"}}]}},{kind:"ObjectField",name:{kind:"Name",value:"versionStatus"},value:{kind:"ListValue",values:[{kind:"EnumValue",value:"ACTIVE"},{kind:"EnumValue",value:"DEPRECATED"}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"versionStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apiSubType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endpoints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"assets"},arguments:[{kind:"Argument",name:{kind:"Name",value:"visible"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AssetFields"},directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ApiVersionTargetUrls"},directives:[]}]}}]}}]}}].concat(f,[{kind:"FragmentDefinition",name:{kind:"Name",value:"AssetFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Asset"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fileSizeBytes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]}]}}])),loc:{start:0,end:343,source:{body:"\nquery apiVersions($apiId: ID!) {\n  apiVersions(where: { apiId: [$apiId], versionStatus: [ACTIVE, DEPRECATED] }) {\n    nodes {\n      id\n      name\n      versionStatus\n      createdAt\n      apiSubType\n      endpoints {\n        id\n      }\n      assets(visible: true) {\n        ...AssetFields\n      }\n      ...ApiVersionTargetUrls,\n    }\n  }\n}\n\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ql={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apiId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"activeOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subscriptions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"apiId"},value:{kind:"Variable",name:{kind:"Name",value:"apiId"}}},{kind:"ObjectField",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"ObjectField",name:{kind:"Name",value:"activeOnly"},value:{kind:"Variable",name:{kind:"Name",value:"activeOnly"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apiVersionId"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:257,source:{body:"\n    query ($apiId: String!, $userId: Int, $activeOnly: Boolean) {\n        subscriptions(where: { apiId: $apiId, userId: $userId, activeOnly: $activeOnly }) {\n            nodes {\n                id\n                apiVersionId\n            }\n        }\n    }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var Wl=a(53587),Jl=a(99008),Yl=a(63258);const{extractColorFromTheme:Xl}=n.Z,ed=o.default.div`
  display: flex;
  width: 50%;
  height: 130px;
  padding: 12px;
  margin-bottom: 20px;
  border: ${({theme:e})=>`1px solid ${Xl("@ui-lib-border-default",e)}`};
  border-radius: 4px;
`,td=o.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  background-color: ${({theme:e})=>Xl("@okinatako-background-secondary",e)};
  margin-right: 15px;
  border-radius: 6px;
  .anticon {
    font-size: 18px;
  }
`,ad=o.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,nd=o.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,id=o.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({theme:e})=>Xl("@okinatako-content-high-emphasis",e)} !important;
`,rd=o.default.span`
  color: ${({theme:e})=>Xl("@okinatako-content-secondary",e)};
  margin-left: 4px;
`,od=o.default.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-block: 8px;
  color: ${({theme:e})=>Xl("@okinatako-content-secondary",e)};
  .bullet {
    margin-inline: 8px;
    font-size: 10px;
    color: ${({theme:e})=>Xl("@okinatako-content-tertiary",e)};
  }
`,sd=o.default.span`
  color: ${({theme:e})=>Xl("@okinatako-content-high-emphasis",e)};
  overflow: auto;
  padding-right: 6px;
`,ld=o.default.span`
  color: ${({theme:e})=>Xl("@okinatako-content-low-emphasis",e)};
  margin-block: auto;
`,dd=({loading:e,onClickDownload:t})=>{const{formatMessage:a}=(0,Ee.Z)(),n=[{label:a({id:"download"}),onClick:t}];return i.createElement(Ps.Z.Button,{overlay:i.createElement(Ss.Z,{items:n}),trigger:["click"],size:"small",disabled:e})},cd=({file:e,onClickDownload:t})=>{const{formatMessage:a}=(0,Ee.Z)(),{filename:n,title:r,description:o,fileSizeBytes:s,createdAt:l}=e;return i.createElement(ed,null,i.createElement(td,null,/.*\.(jpe?g|png|bmp|gif|svg)$/i.test(n)?i.createElement(Wl.Z,null):/.*\.(docx?|pdf|txt|rtf|xml|html?|csv)$/i.test(n)?i.createElement(Jl.Z,null):i.createElement(Yl.Z,null)),i.createElement(ad,null,i.createElement(nd,null,i.createElement(id,null,r||n,r&&i.createElement(rd,null,"(",n,")")),i.createElement(dd,{onClickDownload:t})),i.createElement(od,null,((e,t=2)=>{if(!+e)return"0 Bytes";const a=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**n).toFixed(a))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}`})(s),i.createElement("span",{className:"bullet"},"•"),en()(l).format("DD/MM/YYYY")),o?i.createElement(sd,null,o):i.createElement(ld,null,a({id:"no-description"}))))},pd={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"assetsDownloadUrls"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AssetWhereInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"assetsDownloadUrls"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"downloadUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:148,source:{body:"\n  query assetsDownloadUrls($where: AssetWhereInput!) {\n    assetsDownloadUrls(where: $where) {\n      id\n      filename\n      downloadUrl\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ud=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  padding: 16px;
`,md=()=>{const{formatMessage:e}=(0,Ee.Z)(),{selectedVersion:t}=(()=>{const e=(0,i.useContext)(S);if(!e)throw new Error("Must be in AppVersionContext scope");return e})(),[a]=(0,bl.t)(pd,{fetchPolicy:"cache-and-network"});return i.createElement(ud,null,t.assets.map((t=>i.createElement(cd,{key:t.id,file:t,onClickDownload:()=>(t=>{a({variables:{where:{ids:[t.id]}},onCompleted:({assetsDownloadUrls:e})=>{e.forEach((({downloadUrl:e,filename:t})=>{const a=document.createElement("a");a.href=e,a.download=t,a.click()}))},onError:()=>$t.ZP.error(e({id:"download_asset_failed"},{assetName:t.title||t.filename}))})})(t)}))))},gd=({apiId:e,endpointId:t,preSelectedEntity:a})=>{var n,r,o;const{context:s,setContext:l}=(0,i.useContext)(u),{selectedVersion:d}=(0,i.useContext)(S),[c,p]=(0,i.useState)(bo);(0,i.useEffect)((()=>{const{endpoints:e,assets:t}=d;if(e&&t){const a=T()(e)&&!T()(t);p(a?yo:bo)}}),[null==d?void 0:d.endpoints,null==d?void 0:d.assets]);const{loading:m,data:g}=(0,v.a)(w),{loading:h,error:k,data:f}=(0,v.a)(ai,{skip:!e,variables:{apiId:e}}),b=null==f?void 0:f.api,y=null==b||null===(n=b.version)||void 0===n?void 0:n.id,_=d.id,{data:x,error:E}=(0,v.a)(It,{skip:!_,variables:{apiVersionId:_}}),{loading:A,data:N}=(0,v.a)(Jo,{skip:!s.activeContextId,variables:{entityID:s.activeContextId,apiId:e},context:{headers:{"x-entity-id":s.activeContextId}}}),{loading:I,error:P,data:F}=(0,v.a)(Kl,{skip:!e,variables:{apiId:e}}),{loading:C,error:q,data:D}=(0,v.a)(Ql,{skip:!e||!s.activeContextId,context:{headers:{"x-entity-id":s.activeContextId}},variables:{apiId:e,userId:s.activeContextId,activeOnly:!0}});(0,i.useEffect)((()=>{null!=g&&g.activeUser&&null!=f&&f.api&&(()=>{var e;const{context:t,shouldHidePersonalUser:n}=G({user:null==g?void 0:g.activeUser,api:b,contextTree:null==g||null===(e=g.getActiveUserContext)||void 0===e?void 0:e.context}),i=((e,t,a,n)=>{const i=t.id,r=e===i,o=Object.values(n).reduce(((e,t)=>[...e,...Object.keys(t.children)]),[]);let s;return a||o.unshift(i),s=r?a?o[0]:e:o.find((t=>t===e))||o[0],Number(s)})(a,null==g?void 0:g.activeUser,n,t);l({activeContextId:i})})()}),[null==g?void 0:g.activeUser,null==f?void 0:f.api]);const j=(0,i.useMemo)((()=>{var e,t;const a=O()((null==D||null===(e=D.subscriptions)||void 0===e?void 0:e.nodes)||[],"apiVersionId");return z()((null==F||null===(t=F.apiVersions)||void 0===t?void 0:t.nodes)||[],"createdAt","desc").filter((e=>{var t;return(null===(t=e.versionStatus)||void 0===t?void 0:t.toLowerCase())!==Zl||!!a[e.id]}))}),[null==D||null===(r=D.subscriptions)||void 0===r?void 0:r.nodes,null==F||null===(o=F.apiVersions)||void 0===o?void 0:o.nodes]),V=(0,i.useMemo)((()=>({selectedEndpointIdByHost:t,api:b,isMultiVersioning:j.length>1,apiVersion:null==x?void 0:x.apiVersion})),[t,b,j.length,null==x?void 0:x.apiVersion]),Z=(0,i.useMemo)((()=>"graphql"===d.apiSubType?i.createElement(jl,V):i.createElement(Nl,V)),[d.apiSubType,V]),$=k||P||E||q;if($)throw $;if(m||A||h||I||C)return i.createElement(xe,{loading:!0});const L=null==N?void 0:N.entityById.projectAcls;return i.createElement(Gl,null,i.createElement(Ul,{apiId:e,versions:j,selectedVersionId:_,currentVersionId:y,fetchVersions:I,projectAcls:L,activeViewMode:c,onChangeViewMode:p}),c===bo?Z:i.createElement(md,null))};var vd=a(29558);const hd=o.default.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: space-around;
`,kd=(0,o.default)(wn)`
  & {
    margin: 50% auto;
  }
`,fd=q(),bd=function({resetError:e,messageID:t}){const{formatMessage:a}=(0,Ee.Z)();return i.createElement(vd.Z,{locale:fd.code,messages:fd.translations},i.createElement(hd,null,i.createElement(kd,{messageID:t}),i.createElement(ee.Z,{type:"primary",onClick:e},a({id:"try_again"}))))},yd={light:{"@okinatako-content-primary":"#000000","@okinatako-content-high-emphasis":"rgba(0, 0, 0, 0.87)","@okinatako-content-low-emphasis":"rgba(0, 0, 0, 0.38)","@okinatako-content-secondary":"rgba(0, 0, 0, 0.6)","@okinatako-content-secondary-light":"rgba(255, 255, 255, 0.6)","@okinatako-content-tertiary":"rgba(0, 0, 0, 0.38)","@okinatako-content-tertiary-light":"rgba(255, 255, 255, 0.28)","@okinatako-content-accent":"#0D93F2","@ui-lib-border-default":"#D6D9DB","@ui-lib-content-selected":"#296EC2","@ui-lib-background-selected":"rgba(48, 129, 223, 0.15)","@okinatako-content-error":"#E8304F","@okinatako-content-success":"#20AC89","@okinatako-background-primary":"#ffffff","@okinatako-background-secondary":"#F4F4F5","@okinatako-background-tertiary":"#E1E2E4","@okinatako-background-accent":"#0D93F2","@okinatako-background-extra-accent":"rgb(245, 166, 35)","@okinatako-background-dark":"rgb(19, 49, 84)","@okinatako-background-disabled":"#EBEBEB","@okinatako-background-info":"rgba(13, 147, 242, 0.12)","@okinatako-background-error":"rgba(232, 48, 79, 0.12)","@okinatako-background-success":"rgba(32, 172, 137, 0.12)","@okinatako-border-default":"rgba(0, 0, 0, 0.08)","@okinatako-border-accent":"#0D93F2","@okinatako-border-error":"#E8304F","@okinatako-border-success":"#20AC89","@okinatako-input-primary":"@okinatako-background-primary","@okinatako-text-disabled":"#00000061"},dark:{"@okinatako-content-primary":"rgba(255, 255, 255, 0.87)","@okinatako-content-high-emphasis":"rgba(255, 255, 255, 0.87)","@okinatako-content-low-emphasis":"rgba(255, 255, 255, 0.38)","@okinatako-content-secondary":"rgba(255, 255, 255, 0.6)","@okinatako-content-secondary-light":"rgba(255, 255, 255, 0.6)","@okinatako-content-tertiary":"rgba(255, 255, 255, 0.38)","@okinatako-content-tertiary-light":"rgba(255, 255, 255, 0.28)","@okinatako-content-accent":"#0D93F2","@ui-lib-border-default":"#D6D9DB","@ui-lib-background-selected":"#3080DE","@ui-lib-content-selected":"#ffffff","@okinatako-content-error":"#B82E45","@okinatako-content-success":"#1B9878","@okinatako-background-primary":"#1D1D20","@okinatako-background-secondary":"#27272B","@okinatako-background-tertiary":"#303136","@okinatako-background-accent":"rgba(13, 147, 242, 0.12)","@okinatako-background-extra-accent":"rgb(245, 166, 35)","@okinatako-background-dark":"rgb(19, 49, 84)","@okinatako-background-disabled":"#484848","@okinatako-background-info":"rgba(13, 147, 242, 0.12)","@okinatako-background-error":"rgba(184, 46, 69, 0.12)","@okinatako-background-success":"rgba(27, 152, 120, 0.12)","@okinatako-border-default":"rgba(255, 255, 255, 0.06)","@okinatako-border-accent":"#0D93F2","@okinatako-border-error":"#B82E45","@okinatako-border-success":"#1B9878","@okinatako-input-primary":"#303136","@okinatako-text-disabled":"#929292"}},_d=e=>yd[e]??yd.light,{extractColorFromTheme:wd}=n.Z,xd=o.createGlobalStyle`
  title {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
  }
  body {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)}!important;
  }
  .capitalize {
    text-transform: capitalize;
  }
  div.label {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;    
  }
  .ant-form-item-has-error .ant-input {
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)} !important;
  }
  .ant-form-item .ant-form-item-explain-error {
    font-size: 12px;
  }
  .ant-select-selector {
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)} !important;
    border: ${({theme:e})=>wd("@okinatako-border-default",e)};
  }
  .ant-select-arrow {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    opacity: 0.3
  }
  .ant-select-dropdown {
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)}!important;
  }
  .ant-select-selection-item {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)}!important;
  }
  .ant-select-item {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
  }
  .ant-select-item-option {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)}!important;
  }
  .ant-select-item-option-active {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)}!important;
    &:hover {
      color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
      background-color: ${({theme:e})=>wd("@header-organization-dropdown-item-hover",e)}!important;
      }
    }
  .ant-select-item-option-selected{
    background-color: ${({theme:e})=>wd("@selected-menu-background",e)}!important;
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
    &:hover {
      color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
      background-color: ${({theme:e})=>wd("@header-organization-dropdown-item-hover",e)}
    }
  }
  .ant-select-item-option-content {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
  }
  .ant-select-item-option-active:not{
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
  }
  .ant-select-item-option-disabled { 
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
  }
  .ant-select-item-option-selected:not{
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
  }
  .ant-select {
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)}!important;
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)};
    border-radius: 4px !important;
    border-color: ${({theme:e})=>wd("@okinatako-border-default",e)};
  }
  .ant-select-disabled {
    background-color: ${({theme:e})=>wd("@okinatako-background-disabled",e)} !important;
    .ant-select-selector {
      color: ${({theme:e})=>wd("@okinatako-text-disabled",e)};
      background: transparent !important;
      .ant-select-selection-item {
        color: ${({theme:e})=>wd("@okinatako-text-disabled",e)};
        background: transparent !important;
      }
    }
  }

  .ant-tabs-nav {
    height: unset !important;
    .ant-tabs-content {
      height: 100%;
      color: ${({theme:e})=>wd("@text-color",e)};
    }
    .ant-tabs-tab {
      color: ${({theme:e})=>wd("@text-color",e)};
      &.ant-tabs-tab-disabled {
        color: ${({theme:e})=>wd("@text-color",e)};
        opacity: 0.5
      }
    }
  }

  .ant-collapse,
  .ant-collapse-content,
  .ant-collapse-item {
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)} !important;
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    border: none !important;
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid ${({theme:e})=>wd("@okinatako-border-default",e)};
  }

  .ant-collapse-content {
    border-top: 1px solid ${({theme:e})=>wd("@okinatako-border-default",e)};
    border-bottom: 1px solid ${({theme:e})=>wd("@okinatako-border-default",e)};
  }

  .ant-collapse-item {
    border-bottom: unset !important;
  }

  .ant-collapse-header {
    background-color: ${({theme:e})=>wd("@okinatako-background-secondary",e)};
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    border-bottom: 1px solid ${({theme:e})=>wd("@okinatako-border-default",e)};
    border-top: 1px solid ${({theme:e})=>wd("@okinatako-border-default",e)};
    .ant-collapse-arrow {
      color: ${({theme:e})=>wd("@okinatako-content-primary",e)}  !important;
      opacity: 0.3;
      padding-top: 0 !important;
    }
  }

  .ant-dropdown-menu {
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)} !important;
  }
  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)}!important;
    &:hover {
      color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
      background-color: ${({theme:e})=>wd("@header-organization-dropdown-item-hover",e)} !important;
    }
  }

  .ant-dropdown-menu-item-active {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    background-color: ${({theme:e})=>wd("@header-organization-dropdown-item-hover",e)} !important;
  }
  .ant-dropdown-menu-submenu {
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)}!important;
    .ant-dropdown-menu-submenu-arrow-icon {
      color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    }
  }
  .ant-dropdown-menu-item ant-dropdown-menu-item-only-child {
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)}!important;
  }

  .ant-modal-close {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
  }
  .ant-modal-title {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
  }
  .ant-modal-header {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    background-color: ${({theme:e})=>wd("@header-organization-dropdown-item-hover",e)}    
  }
  .ant-modal-content {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    background-color: ${({theme:e})=>wd("@okinatako-background-primary",e)}!important;
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before {
    display: none;
  }

  .ant-select:not(.ant-select-customize-input):not(.ant-select-disabled) .ant-select-selector,
  .ant-dropdown-trigger,
  .ant-input-number,
  input[type='text'],
  input[type='file'],
  textarea {
    color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important;
    background-color: ${({theme:e})=>wd("@okinatako-input-primary",e)} !important;
    border-radius: 4px !important;
    border-color: ${({theme:e})=>wd("@okinatako-border-default",e)};
  }

  .ant-alert-error {
    background-color: ${({theme:e})=>wd("@okinatako-background-error",e)} !important;
    border-color: ${({theme:e})=>wd("@okinatako-border-error",e)} !important;
    .ant-alert-icon {
      color: ${({theme:e})=>wd("@okinatako-border-error",e)} !important;
    }
    .ant-alert-content {
      .ant-alert-message {
        color: ${({theme:e})=>wd("@okinatako-content-primary",e)} !important; 
      }
    }
  }

  .ant-alert-warning {
    color: ${({theme:e})=>wd("@okinatako-background-dark",e)} !important;
    .ant-alert-action {
      margin-left: 15px;
      .ant-btn {
        color: ${({theme:e})=>wd("@okinatako-background-dark",e)} !important;
      }
    }
  }

  input[type='file'] {
    &::-webkit-file-upload-button {
      background-color: ${({theme:e})=>wd("@okinatako-content-tertiary",e)};
    }
  }

  .reflex-container.vertical > .reflex-splitter {
    &, 
    &.active {
      border-left: 1px solid ${({theme:e})=>wd("@okinatako-content-tertiary",e)};
      border-right: 1px solid ${({theme:e})=>wd("@okinatako-content-tertiary",e)};
    }
    :hover {
      border-left: 1px solid ${({theme:e})=>wd("@okinatako-border-accent",e)};
      border-right: 1px solid ${({theme:e})=>wd("@okinatako-border-accent",e)};
    }
  }
`,Ed=xd;var Ad;a(76010),e=a.hmd(e);const{search:Nd}=window.location,Id=new URLSearchParams(Nd),Sd=Id.get("mode")??"light",Pd=Id.get("brand"),Fd=Id.get("locale"),Cd=Id.get("apiId"),qd=Id.get("endpointId"),Dd=Id.get("preSelectedEntity"),Td=q(Fd);s.S({dsn:"https://f569275a91994757a4df56ef0762f2e6@o493232.ingest.sentry.io/5859573",release:"1.4.30",environment:"production",integrations:[new d.jK.gE],tracesSampleRate:.1,ignoreErrors:["top.GLOBALS","originalCreateNotification","canvas.contentDocument","MyApp_RemoveAllHighlights","http://tt.epicplay.com","Can't find variable: ZiteReader","jigsaw is not defined","ComboSearch is not defined","http://loading.retry.widdit.com/","atomicFindClose","fb_xd_fragment","bmi_SafeAddOnload","EBCallBackMessageReceived","conduitPage","Script error.","Failed to fetch","TypeError: Cancelled","Request failed with status code 403","NetworkError when attempting to fetch resource","Error: Network Error","Error: ResizeObserver loop limit exceeded"]});const jd=()=>{const e=E("custom-theme"),t=E("apiPlaygroundSegmentKey");return(0,i.useEffect)((()=>{if(function(e){window.analytics=window.analytics||[];const{analytics:t}=window;if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],t.factory=function(e){return function(){const a=Array.prototype.slice.call(arguments);return a.unshift(e),t.push(a),t}};for(let e=0;e<t.methods.length;e+=1){const a=t.methods[e];t[a]=t.factory(a)}t.load=function(e,a){const n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=`https://cdn.segment.com/analytics.js/v1/${e}/analytics.min.js`;const i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i),t._loadOptions=a},t._writeKey=e,t.SNIPPET_VERSION="4.13.2",t.load(e)}}(t),"dark"===Sd){const e=n.Z.theme.dark;window.less.modifyVars(e)}else{const t=(null==e?void 0:e.colors.light)||{},a=n.Z.theme.light;window.less.modifyVars({...a,...t})}}),[]),i.createElement(o.ThemeProvider,{theme:_d(Sd)},i.createElement(Ed,null),i.createElement(l.SV,{fallback:({resetError:e})=>i.createElement(bd,{resetError:e,messageID:"general-error-boundary-message"})},i.createElement(m,null,i.createElement(P,null,i.createElement(I,null,i.createElement(gd,{apiId:Cd,endpointId:qd,preSelectedEntity:Dd}))))))};r.render(i.createElement(c.Qr,{name:"Playground",mode:Sd,brand:Pd,locale:null==Td?void 0:Td.code,translations:null==Td?void 0:Td.translations},i.createElement(jd,null)),document.getElementById("root")),null===(Ad=e.hot)||void 0===Ad||Ad.accept()},77542:()=>{},90652:()=>{},99948:()=>{},52361:()=>{},94616:()=>{}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,e=[],r.O=(t,a,n,i)=>{if(!a){var o=1/0;for(c=0;c<e.length;c++){for(var[a,n,i]=e[c],s=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](a[l])))?a.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,n,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var o={};t=t||[null,a({}),a([]),a(a)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,r.d(i,o),i},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={757:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[o,s,l]=a,d=0;if(o.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r)}for(t&&t(a);d<o.length;d++)i=o[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self.webpackChunkapi_playground=self.webpackChunkapi_playground||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.nc=void 0,r.O(void 0,[763],(()=>r(33505)));var o=r.O(void 0,[763],(()=>r(40769)));o=r.O(o)})();
//# sourceMappingURL=Playground.72e9817baf54e48bf266.bundle.js.map
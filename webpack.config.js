module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    // メインとなるJavaScriptファイル(エントリーポイント)
    entry: `./src/js/index.js`,

    // ファイルの出力先
    output: {
        // 出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル
        filename: "main.js"
    },

    //　ローカル開発環境を立ち上げる
    // 実行時にブラウザが自動的にlocalhostを開く
    devServer: {
        static: "dist",
        port: 9000,
        open: true
    }
};
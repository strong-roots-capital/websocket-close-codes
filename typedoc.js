module.exports = {
    src: [
        './src/websocket-close-codes.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: 'readme.md',
    name: 'websocket-close-codes',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};

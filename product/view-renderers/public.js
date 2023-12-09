const mainViewFolderName = 'public/pages';

module.exports.indexPageRenderer = ({response}) => {
    const viewFile = `${mainViewFolderName}/index`;

    const params = {};

    response.render(viewFile, params);
}


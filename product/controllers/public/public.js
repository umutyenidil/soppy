const publicViewRenderers = require('../../view-renderers/public');

module.exports.getIndex = async (incomingRequest, outgoingResponse) => {
    try {
        publicViewRenderers.indexPageRenderer({
            response: outgoingResponse,
        });
    } catch (error) {

    }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfiles = exports.getProfile = exports.UpdateProfile = exports.createProfile = void 0;
const Client_1 = require("../../../config/Client");
const createProfile = async (data) => {
    const _profile = await Client_1.client.profile.create({
        data: {
            user: {
                connect: { id: data.userId }
            }
        }
    });
    return _profile;
};
exports.createProfile = createProfile;
const UpdateProfile = async (id, data) => {
    const _res = await Client_1.client.profile.update({
        where: {
            id: id
        },
        data: data
    });
    return _res;
};
exports.UpdateProfile = UpdateProfile;
const getProfile = async (id) => {
    const _res = await Client_1.client.profile.findUnique({
        where: {
            id: id
        }
    });
    return _res;
};
exports.getProfile = getProfile;
const getProfiles = async () => {
    const _res = await Client_1.client.profile.findMany();
    return _res;
};
exports.getProfiles = getProfiles;
//# sourceMappingURL=profile.func.js.map
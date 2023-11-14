import { axiosInstance } from "@api/instance";
import { formsUrl } from "@api/constants";

const endpoints = {
    emailSub: formsUrl.email,
    vacancyForm: formsUrl.vacancies,
    contactsForm: formsUrl.contacts,
    mailingListHeader: formsUrl.contacts,
    fileSub: formsUrl.research,
    project: formsUrl.modal,
    media: formsUrl.modal,
    hr: formsUrl.modal,
    partner: formsUrl.modal,
    presentSub: formsUrl.presentation,
    projectAbout: formsUrl.modal,
};

export const postFormData = (data, type) => {
    return axiosInstance.post(endpoints[type], data);
};

export const uploadFile = (files) => {
    const formData = new FormData();

    for (const file of files) {
        formData.append("files", file);
    }

    return axiosInstance.post(formsUrl.file, formData, {
        headers: {
            "content-type": "multipart/form-data",
        },
        timeout: 20000, // 20s
    });
};

export default {
    uploadFile,
    postFormData,
};

import { getRegistrationProgress } from "../utils/registration.utils";

export const getRegisterValues = (setFormData) => {
	getRegistrationProgress("FormData").then((progressData) => {
		if (progressData) {
			console.log(progressData.formData);

			setFormData({
				user_name: progressData.formData.user_name,
				phone_number: progressData.formData.phone_number,
				gender: progressData.formData.gender,
				date_of_birth: progressData.formData.date_of_birth,
				country: progressData.formData.country,
				city: progressData.formData.city,
			});
		}
	});
};

export enum RegistrationError {
  AlreadyRegistered,
  Unknown,
}

export const INSTITUTIONS: Array<{label: string; value: string;}> = [
	{
		label: "Sélectionnez votre école ou institution",
		value: "",
	},
	{
		label: "Epitech",
		value: "epitech",
	},
	{
		label: "Epitech Digital School",
		value: "epitech_digital",
	},
	{
		label: "Web@cadémie",
		value: "web_academie",
	},
  {
    label: "e-artsup",
    value: "e_artsup"
	},
  {
    label: "ISEG",
    value: "iseg"
	},
  {
    label: "XP Esport & Gaming School",
    value: "xp"
	},
  {
    label: "Non-rattaché à une institution",
    value: "independant"
	},
  {
    label: "Autre institution",
    value: "other"
  }
];

export const EPITECH_FORMATIONS: Array<{label: string; value: string;}> = [
  {
    value: "",
    label: "Sélectionnez votre formation Epitech"
  },
  {
    value: "premsc",
    label: "PreMsc"
  },
  {
    value: "msc",
    label: "Msc"
  },
  {
    value: "pge",
    label: "PGE"
  },
  {
    value: "pedago",
    label: "Equipe pédagogique"
  },
  {
    value: "admin",
    label: "Administration"
  },
];


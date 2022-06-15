let environment = "dev";

const generateEnvVariables = () => {
  if (environment === "dev") {
    return {
      baseUrl: "https://stagingzvnt.azurewebsites.net/api/v1",
    };
  } else {
    return {
      baseUrl: "https://stagingzvnt.azurewebsites.net/api/v1",
    };
  }
};

export default generateEnvVariables;

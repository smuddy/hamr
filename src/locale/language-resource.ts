interface Page {
  titleMenu: string;
  titleHead: string;

}

export interface LanguageResource {
  header: {
    appName: string;
    appSlogan: string;
  };
  pages: {
    newQso: Page & {
      labelCallSign: string;
    };
  };
}

// SUB: GET CURRENT PAGE
export const getPage = (path = "dashboard/") => {
  return window.location.pathname.split(path)[1]
    ? window.location.pathname.split(path)[1]
    : window.location.pathname.split("/")[1];
};

// SUB: CONFIRM PAGE LOCATION
export const checkInLocation = (val: number) => {
  return new RegExp("^" + val).test(getPage());
};

// GET CURRENT YEAR
export const getCurrentYear = () => {
  var date = new Date();
  var year = date.getFullYear();
  return year;
};

// GET CURRENT DATE STRING
export const getCurrentDate = (): string => {
  const date = new Date();

  let day: number | string = date.getDate();
  let month: number | string = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  const today = `${year}-${month}-${day}`;

  return today;
};

// GET DATE STRING
export const getDateString = (dateString: string) => {
  var date = new Date(dateString);

  return date.toDateString();
};

// get date string
export const getDateValue = (originalDate: Date) => {
  return new Date(originalDate).toISOString().slice(0, 10);
};

// PARSE INTEGER
export const parseAnswerInt = (element: string): number | string => {
  if (!isNaN(Number(element)) && element != "") {
    return parseInt(element, 10);
  } else {
    return element;
  }
};

export const parseArrayAnswerInt = (
  inputString: string
): (number | string)[] => {
  const stringArray: (number | string)[] = inputString
    .split(",")
    .map((element) => {
      return parseAnswerInt(element.trim());
    });

  return stringArray;
};


export const cleanAndParseString = (inputString: string) => {
  try {
    // Remove \n and \t escapes from the string
    const cleanedString = inputString.replace(/\\n/g, "").replace(/\\t/g, "");

    // Parse the cleaned string
    const parsedData = JSON.parse(cleanedString);

    return parsedData.questions;
  } catch (error) {
    console.error("Error parsing string:", error);
    return [];
  }
};

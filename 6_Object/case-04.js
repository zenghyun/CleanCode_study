/**
 * Object Lookup Table
 */

// 변경 전
function getUserType1(type) {
    if (type === "ADMIN") {
      return "관리자";
    } else if (type === "INSTRUCTOR") {
      return "강사";
    } else if (type === "STUDENT") {
      return "수강생";
    } else {
      return "해당 없음";
    }
  }
  
  // 개선 1  (보다 깔끔하지만 case가 추가될 때마다 나열되는건 다름없다.)
  
  function getUserType2(type) {
    switch (key) {
      case "ADMIN":
        return "관리자";
      case "INSTRUCTOR":
        return "강사";
      case "STUDENT":
        return "수강생";
      case "STUDENT2":
        return "수강생";
      case "STUDENT3":
        return "수강생";
      default:
        return "해당 없음";
    }
  }
  
  // 개선 2 (개인적으로 이게 가장 좋다.)
  
  function getUserType3(type) {
    const USER_TYPE = {
      ADMIN: "관리자",
      INSTRUCTOR: "수강생",
      STUDENT: "학생",
      UNDEFINED: "해당 없음",
    };
  
     return USER_TYPE[type] ?? USER_TYPE.UNDEFINED; // ver 1
    //  return USER_TYPE[type] ?? USER_TYPE["UNDEFINED"];  ver 2
  }
  
  console.log(getUserType3("ADMIN"));
  console.log(getUserType3("qesf"));
  
  // 개선 3
  
  function getUserType4(type) {
    return {
      ADMIN: "관리자",
      INSTRUCTOR: "수강생",
      STUDENT: "학생",
    }[type] ?? "해당 없음";
  }
  
  console.log(getUserType4("ADMIN"));
  console.log(getUserType4("qesf"));
  
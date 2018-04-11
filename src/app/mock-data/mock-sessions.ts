import { Session } from "../entity/session";

export const SESSIONS : Session[] = [
    { sessionID: "/api/sessions/293cbb63-adfe-4298-a211-107769d1282b",
      courseID: "/api/courses/b8cf2a9f-a469-4810-8bd6-0e5c78672f36",
      teacherID: "teacherino1",
      startDate: new Date("2018-04-11T13:21:30+02:00"),
      endDate: new Date("2018-12-30T13:21:30+02:00"),
      studentsID: [ "studente1", "studente2"],
    },
    { sessionID: "/api/sessions/52631e2f-c41b-48c3-8a51-9f3371def9ae",
      courseID: "/api/courses/514e272a-1b35-4c28-aa29-5941d9c436d8",
      teacherID: "teacherino1",
      startDate: new Date("2018-04-11T13:21:30+02:00"),
      endDate: new Date("2018-12-30T13:21:30+02:00"),
      studentsID: [ "studente1", "studente3"]
    },
]
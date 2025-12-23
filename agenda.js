import { TMongo } from "./infra/mongoClient.js";
import { lib } from "./utils/lib.js";
import nodeSchedule from "node-schedule";

global.processandoNow = 0;

async function task() {
  global.processandoNow = 1;
  console.log(" Job Finished [task] " + lib.currentDateTimeStr());
}

async function init() {
  try {
    const time = 15; //tempo em minutos
    const job = nodeSchedule.scheduleJob(`*/${time} * * * *`, async () => {
      console.log("Job start as " + lib.currentDateTimeStr());

      try {
        await TMongo.close();
        await task();
      } finally {
        global.processandoNow = 0;
      }
    });
  } catch (err) {
    throw new Error(`Can't start agenda! Err: ${err.message}`);
  }
}

export const agenda = { init };

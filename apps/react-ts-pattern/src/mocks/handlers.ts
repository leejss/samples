import { http, HttpResponse } from "msw";
import { counterService } from "../service/counter-service";
const counterHanders = [
  http.get("/api/counter", async () => {
    const value = await counterService.getCount();
    return HttpResponse.json({
      value,
    });
  }),
  http.post("/api/counter/increment", async () => {
    const value = await counterService.increment();
    return HttpResponse.json({
      value,
    });
  }),
  http.post("/api/counter/decrement", async () => {
    const value = await counterService.decrement();
    return HttpResponse.json({
      value,
    });
  }),
];

export const handlers = [...counterHanders];

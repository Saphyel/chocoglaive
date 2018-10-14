import birthplaces from "../data/birthplaces.json";
import {BirthdayService} from "./BirthdayService";

it('get all', async () => {
  expect.assertions(1);
  const data = await BirthdayService.fetchAll();
  expect(data).toEqual(birthplaces);
});

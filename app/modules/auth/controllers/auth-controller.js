import pick from 'lodash/pick';
import { User } from '../../users';

export default {
  async signUp(ctx) {
    const { _id } = await User.create(pick(ctx.request.body, User.createFields));
    const user = await User.findOne({ _id }).select({ password: 0, _id: 0, __v: 0 }).lean();

    ctx.body = { data: user };
  },
};
import { findRooms } from '@controllers';
import { Router } from 'express';
import { wrap } from '@utils';

const roomsRouter = Router();

roomsRouter.post('/find', wrap(findRooms));

export { roomsRouter };

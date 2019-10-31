import { SET_CLOSE, setToClosed } from 'setToClosed';
import { SET_CREATE, setToCreated } from 'setToCreated';
import { SET_DELETE, setToDeleted } from 'setToDeleted';
import { SET_OPEN, setToOpened } from 'setToOpened';
import { SET_UPDATE, setToUpdated } from 'setToUpdated';

export default function Actions() {
  return ({
    SET_CREATE,
    SET_CLOSE,
    SET_DELETE,
    SET_OPEN,
    SET_UPDATE,
    setToClosed,
    setToCreated,
    setToDeleted,
    setToOpened,
    setToUpdated,
  });
}

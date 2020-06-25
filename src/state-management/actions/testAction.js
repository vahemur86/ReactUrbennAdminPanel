
import {TEST} from "../../core/constants/actionTypes";

export const cntrlGetTest = payload => ({
    type : TEST.CNTRL_GET_TEST,
    payload
});

export const rxGetTest = payload => ({
    type : TEST.RX_GET_TEST,
    payload
});
export const rxGetTestPending = payload => ({
    type : TEST.RX_GET_TEST_PENDING,
    payload
});

export const rxGetTestDone = payload => ({
    type : TEST.RX_GET_TEST_DONE,
    payload
});
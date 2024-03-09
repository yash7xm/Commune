import { atom } from "jotai";

const channelsAtom = atom([]);

export const activeChannelAtom = atom([0, "Select User"]);

export default channelsAtom;

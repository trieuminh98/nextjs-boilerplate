'use server';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { SEVEN_DAY } from '../types/common.type';

const DEFAULT_CONFIGS: Partial<ResponseCookie> = {
  maxAge: SEVEN_DAY,
  httpOnly: true,
  secure: process.env.ENV === 'PROD',
  path: '/',
};

export const setCookie = async (
  name: string,
  data: string,
  configs: Partial<ResponseCookie> = {},
) => {
  cookies().set(name, data, { ...DEFAULT_CONFIGS, ...configs });
};

export const getCookie = async (name: string) => {
  return cookies().get(name);
};

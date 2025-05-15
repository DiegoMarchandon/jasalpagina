import { serialize } from 'cookie';

export default function logoutHandler(req, res) {
  const expiredCookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  res.setHeader('Set-Cookie', expiredCookie);
  return res.status(200).json({ message: 'Sesión cerrada' });
}

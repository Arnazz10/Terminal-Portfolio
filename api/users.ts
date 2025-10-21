export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    return res.status(200).json([]);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}

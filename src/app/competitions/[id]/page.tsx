import { PrismaClient, competition, Prisma } from '@prisma/client';

const prisma = new PrismaClient();


export default async function Competition() {
  const competitions = await prisma.competition.findMany()
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {competitions.map((competition) => (
            <tr key={competition.id}>
              <td>{competition.id}</td>
              <td>{competition.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
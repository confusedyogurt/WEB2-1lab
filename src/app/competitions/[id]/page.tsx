import { PrismaClient, competition, Prisma } from '@prisma/client';
import type { ColumnsType } from 'antd/es/table';
import { Space, Table, Tag } from 'antd';

const prisma = new PrismaClient();
import React from 'react'
import { notFound } from 'next/navigation'

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'white',
};

const formContainerStyle = {
  width: '50%',
  padding: '5rem',
  background: '#f0f0f0',
  borderRadius: '1rem',
};

const competitionNameStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '1rem',
};

const scoringSystemStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '1rem',
};

const roundNameStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'black',
  marginTop: "3rem",
  marginBottom: "1rem"
};

interface DataType {
  firstPlayer: string;
  secondPlayer: string;
  result: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Prvi igrač',
    dataIndex: 'firstplayer',
    key: 'firstplayer',
    width: '33%'
  },
  {
    title: 'Drugi igrač',
    dataIndex: 'secondPlayer',
    key: 'secondPlayer',
    width: '33%'
  },
  {
    title: 'Rezultat',
    dataIndex: 'result',
    key: 'result',
    width: '33%'
  },
];

export default async function Competition({ params }: { params: { id: string } }) {
  console.log("TUUUU SAM ")
  const id = parseInt(params.id)

  const competition: any = await prisma.competition.findUnique({
    where: { id: id },
    include: { round: { include: { match: true } } },
  })

  console.log("COMPETITION ", competition.round[0].match)

  if (!competition) notFound()

  return (
    <div style={cardStyle}>
      <div style={formContainerStyle}>
        <h2 style={competitionNameStyle}>Natjecanje: {competition.name}</h2>
        <h2 style={scoringSystemStyle}>Sustav bodovanja: {competition.scoringsystem}</h2>
        {competition.round.map((round: any, roundIndex: any) => (
          <div key={roundIndex}>
            <h3 style={roundNameStyle}>{round.name}</h3>
            <Table
              pagination={false}
              columns={columns}
              dataSource={round.match.map((match: any, index: any) => ({
                ...match,
                key: index,
              }))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
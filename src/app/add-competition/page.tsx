'use client';
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation'

type FieldType = {
    name?: string;
    competitors?: string;
    win?: number;
    remi?: number;
    defeat?: number;
};

const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'white',
};

const formContainerStyle = {
    width: '100%',
    maxWidth: 600,
    padding: '16px',
    background: '#f0f0f0',
    borderRadius: '8px',
};

const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: 'black'
};

const subheaderStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: 'black',
};

export default function AddCompetition() {
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        setLoading(true)
        try {
            const result: any = await fetch(`/api/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })
            if (result.ok) {
                const competition: any = await result.json();
                router.push('/competitions/' + competition["id"].toString())
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const checkNumber = (_: any, value: number) => {
        if (/^\d+$/.test(value.toString())) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Mora biti broj!'));
    };

    const checkCompetitors = (_: any, value: string) => {
        if (/^(?:[^;]+;){3,}[^;]+$/.test(value.toString())) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Mora biti 4-8 natjecatelja odvojenih s ;'));
    };

    return (
        <div style={cardStyle}>
            <div style={formContainerStyle}>
                <div style={titleStyle}>Dodaj natjecanje</div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Ime natjecanja"
                        name="name"
                        rules={[{ required: true, message: 'Unesite ime natjecanja!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Natjecatelji"
                        name="competitors"
                        rules={[{ required: true, message: 'Unesite 4-8 natjecatelja odvojenih s ;', validator: checkCompetitors }]}
                    >
                        <Input />
                    </Form.Item>

                    <div style={subheaderStyle}>Sustav bodovanja</div>

                    <Form.Item<FieldType>
                        label="Pobjeda"
                        name="win"
                        rules={[{ required: true, message: 'Unesite broj', validator: checkNumber }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Remi"
                        name="remi"
                        rules={[{ required: true, message: 'Unesite broj', validator: checkNumber }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Poraz"
                        name="defeat"
                        rules={[{ required: true, message: 'Unesite broj', validator: checkNumber }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Dodaj
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}


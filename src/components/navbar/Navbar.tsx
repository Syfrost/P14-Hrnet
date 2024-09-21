import React from 'react';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx'; // Assurez-vous d'importer votre composant Button
import './Navbar.css';

export function Navbar() {
    return (
        <div className="navbar-container">
            <Card className="navbar">
                <CardContent>
                    <nav className={`navbar-in`}>
                        <h1>HRNET</h1>
                        <ul>
                            <li><Button onClick={() => window.location.href = "#"}>Forms</Button></li>
                            <li><Button onClick={() => window.location.href = "#list"}>Employees</Button></li>
                        </ul>
                    </nav>
                </CardContent>
            </Card>
        </div>
    );
}
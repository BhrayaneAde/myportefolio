'use client';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Outer Hexagon */}
        <path
          d="M60 10L95 30L95 70L60 90L25 70L25 30Z"
          fill="url(#hexGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2"
        />
        
        {/* Neural Network Nodes */}
        <circle cx="40" cy="35" r="3" fill="#60a5fa" className="animate-pulse" />
        <circle cx="80" cy="35" r="3" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <circle cx="60" cy="50" r="4" fill="#ffffff" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="40" cy="65" r="3" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        <circle cx="80" cy="65" r="3" fill="#60a5fa" className="animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Neural Connections */}
        <path
          d="M40 35L60 50M80 35L60 50M60 50L40 65M60 50L80 65M40 35L80 35M40 65L80 65"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-pulse"
        />
        
        {/* Digital Brain Waves */}
        <path
          d="M30 25Q35 20 40 25T50 25Q55 20 60 25T70 25Q75 20 80 25T90 25"
          stroke="rgba(96,165,250,0.6)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 75Q35 80 40 75T50 75Q55 80 60 75T70 75Q75 80 80 75T90 75"
          stroke="rgba(6,182,212,0.6)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Code Particles */}
        <rect x="25" y="40" width="2" height="2" fill="rgba(255,255,255,0.7)" rx="1" className="animate-ping" />
        <rect x="93" y="55" width="2" height="2" fill="rgba(255,255,255,0.7)" rx="1" className="animate-ping" style={{animationDelay: '0.8s'}} />
        <rect x="35" y="80" width="2" height="2" fill="rgba(255,255,255,0.7)" rx="1" className="animate-ping" style={{animationDelay: '1.6s'}} />
        <rect x="85" y="20" width="2" height="2" fill="rgba(255,255,255,0.7)" rx="1" className="animate-ping" style={{animationDelay: '2.4s'}} />
        
        {/* Central Innovation Symbol */}
        <path
          d="M55 45L60 40L65 45L60 50Z"
          fill="#ffffff"
          className="animate-bounce"
          style={{animationDuration: '3s'}}
        />
        <circle cx="60" cy="55" r="2" fill="#ffffff" className="animate-pulse" />
        
        {/* Quantum Dots */}
        <circle cx="30" cy="50" r="1" fill="rgba(96,165,250,0.8)" className="animate-ping" style={{animationDelay: '0.3s'}} />
        <circle cx="90" cy="50" r="1" fill="rgba(6,182,212,0.8)" className="animate-ping" style={{animationDelay: '1.3s'}} />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="30%" stopColor="#1e40af" />
            <stop offset="60%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
interface NetworkBadgeProps {
  network: string;
}

const NetworkBadge = ({ network }: NetworkBadgeProps) => {
  return (
    <div className="px-3 py-1.5 rounded-full text-sm bg-blue-500/20 text-blue-200">
      {network}
    </div>
  );
};

export default NetworkBadge;

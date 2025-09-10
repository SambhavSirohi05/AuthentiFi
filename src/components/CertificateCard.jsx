const CertificateCard = ({ certificate, showStatus = true }) => {
  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow">
      <div className="flex flex-[2_2_0px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          {showStatus && (
            <p className={`text-sm font-normal leading-normal px-2 py-1 rounded-full w-fit ${getStatusColor(certificate.status)}`}>
              {certificate.status}
            </p>
          )}
          <p className="text-[#111418] text-base font-bold leading-tight">{certificate.title}</p>
          <p className="text-[#637188] text-sm font-normal leading-normal">Issued by {certificate.issuer}</p>
          <p className="text-[#637188] text-xs font-normal leading-normal">{certificate.date}</p>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit hover:bg-[#e5e7eb]">
          <span className="truncate">View</span>
        </button>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url("${certificate.image}")` }}
      ></div>
    </div>
  );
};

export default CertificateCard;



import DeletePurchaseReceiptApi from '@/services/api/PurchaseReceipt/delete-purchase-receipt';
import getPurchasreceiptListApi from '@/services/api/get-purchase-recipts-list-api';
import { get_access_token } from '@/store/slices/auth/login-slice';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const UseCustomReceiptHook: any = () => {
  const router = useRouter();
  const pathParts = router.asPath.split('/');
  const lastPartOfURL = pathParts[pathParts.length - 1];

  const loginAcessToken = useSelector(get_access_token);

  const [kundanListing, setKundanListing] = useState<any>([]);

  const HandleDeleteReceipt: any = async (name: any) => {
    let deletePurchaseReceiptApi: any = await DeletePurchaseReceiptApi(
      loginAcessToken?.token,
      name
    );
    console.log('deletereciept api', deletePurchaseReceiptApi);
    if (deletePurchaseReceiptApi?.message?.status === 'success') {
      toast.success(deletePurchaseReceiptApi?.message?.message);
      const capitalizeFirstLetter = (str: any) => {
        return str?.charAt(0)?.toUpperCase() + str?.slice(1);
      };

      let updatedData: any = await getPurchasreceiptListApi(
        loginAcessToken,
        capitalizeFirstLetter(lastPartOfURL)
      );

      setKundanListing(updatedData);
    } else {
      toast.error('Failed to Delete purchase Receipt');
    }
  };

  return { setKundanListing, kundanListing, HandleDeleteReceipt };
};

export default UseCustomReceiptHook;

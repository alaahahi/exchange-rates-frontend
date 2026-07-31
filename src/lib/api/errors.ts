export class ApiError extends Error {
  readonly status: number;
  readonly code: 'network' | 'http' | 'invalid';

  constructor(message: string, status = 0, code: ApiError['code'] = 'http') {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

export function messageForStatus(status: number): string {
  switch (status) {
    case 401:
      return 'غير مصرح بالوصول إلى البيانات.';
    case 403:
      return 'ليس لديك صلاحية لعرض هذه البيانات.';
    case 404:
      return 'لم يتم العثور على البيانات المطلوبة.';
    case 422:
      return 'البيانات المرسلة غير صالحة.';
    case 429:
      return 'تم تجاوز عدد الطلبات المسموح. حاول مرة أخرى لاحقاً.';
    case 500:
    case 502:
    case 503:
      return 'تعذر تحميل أسعار الصرف حالياً، يرجى المحاولة مرة أخرى.';
    default:
      return 'تعذر تحميل أسعار الصرف حالياً، يرجى المحاولة مرة أخرى.';
  }
}
